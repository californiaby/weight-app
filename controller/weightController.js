const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');
const Weight = require('../models/weight');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

/**
 * Returns weight data for a specific user.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getWeight = (req, res, next) => {
  return Weight
    .find({ user: req.query.user_id })
    .sort('date asc')
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => next(err));
};

/**
 * Adds weight data for a specific user.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.addWeight = (req, res, next) => {
  return User
    .findById(req.body.user_id)
    .then((userObj) => {
      // TODO: handle check that user exists
      return Weight.create({
        user: userObj.id,
        value: req.body.value,
        units: req.body.units,
        date: req.body.date,
      });
    })
    .then((weightObj) => {
      res.status(200).send(weightObj);
    })
    .catch(err => next(err));
};

/**
 * Deletes weight data.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.deleteWeight = (req, res, next) => {
  return Weight
    .findByIdAndRemove(req.body.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(err => next(err));
};
