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
exports.getWeight = async (req, res, next) => {
  try {
    const user = User.findById(req.query.user_id);
    const weights = Weight.find({
      user: req.query.user_id,
    });
    const data = await Promise.all([user, weights]);
    const response = {};

    Object.assign(response, data[0]); // assign user obj
    Object.assign(response, data[1]); // assign weights array

    res.status(200).send(data[1]);
  } catch (err) {
    next(err);
  }
};

/**
 * Adds weight data for a specific user.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.addWeight = async (req, res, next) => {
  try {
    const userObj = await User.findById(req.body.user_id);
    const weightObj = await Weight.create({
      user: userObj.id,
      value: req.body.value,
      units: req.body.units,
      date: req.body.date,
    });

    res.status(200).send(weightObj);
  } catch (err) {
    next(err);
  }
};

/**
 * Deletes weight data.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.deleteWeight = async (req, res, next) => {
  try {
    const response = await Weight.findByIdAndRemove(req.body.id);

    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};
