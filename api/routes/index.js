const express = require('express');
const ctrlHome = require('../controllers/homeController');

const router = express.Router();
function catchErrors(fn) {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
}


router.get('/home', catchErrors(ctrlHome.homePage));

module.exports = router;
