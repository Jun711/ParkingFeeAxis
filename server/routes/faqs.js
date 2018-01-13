var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var constants = require('../util/constants');

var db = mongojs(constants.DB_PARKING, ['faqs']);

router.get("/faqs", function (req, res, next) {
  db.faqs.find(function (err, faqs) {
    if (err) {
      res.send(err);
    }
    res.json(faqs);
  })
});

module.exports = router;