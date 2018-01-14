var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var constants = require('../util/constants');

var db = mongojs(constants.DB_PARKING, ['parkingSpots']);

var parkingSpotUtils = require('../util').ParkingSpots;

// get nearby drivers within a radius
router.get('/parkingSpots', function (req, res, next) {
  db.parkingSpots.createIndex({'geometry': '2dsphere'});
  db.parkingSpots.find({
    'geometry': {
      '$near': {
        '$geometry': {
          'type': 'Point',
          'coordinates': [parseFloat(req.query.longitude), parseFloat(req.query.latitude)]
        },
        '$maxDistance': constants.RADIUS
      }
    }
  }, function (err, parkingSpots) {

    var processedParkingSpots = parkingSpotUtils.processParkingSpotDescription(parkingSpots);

    if (err) {
      res.send(err);
    } else {
      res.send(processedParkingSpots)
    }
  });
})

module.exports = router;