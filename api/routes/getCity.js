var express = require("express");

var router = express.Router();

var City = require("../config/city");
router.get("/city/get/:id?", function (req, res, next) {
  if (req.params.id) {
    City.getCityById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    City.getAllCity(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post("/city/create", function (req, res, next) {
  console.log("🚀 ~ file: getCity.js:30 ~ City.addCity ~ req.body:", req.body);
  City.addCity(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/city/delete/:id", function (req, res, next) {
  City.deleteCity(req.params.id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put("/city/update/:id", function (req, res, next) {
  City.updateCity(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
