var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('DB_PARKING', ['parkingSpots']);

// get nearby drivers
router.get('/parkingSpots', function(req, res, next) {

  db.parkingSpots.createIndex({'geometry': '2dsphere'});
  db.parkingSpots.find({
    'geometry': {
      '$near': {
        '$geometry': {
          'type': 'Point',
          'coordinates': [parseFloat(req.query.longitude), parseFloat(req.query.latitude)]
        },
        '$maxDistance': 100
      }
    }
  }, function(err, parkingSpots) {
      if (err) {
        res.send(err);
      } else {
        res.send(parkingSpots)
      }
    });
})

module.exports = router;