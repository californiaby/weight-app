const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

/**
 * Returns list of users.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getUsers = function (req, res, next) {
  return User
    .find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(err => next(err));
};

/**
 * Creates a new user.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.createUser = function (req, res, next) {
  return User
    .create({
      name: req.body.name,
      email: req.body.email,
    })
    .then((obj) => {
      res.status(201).send(obj);
    })
    .catch(err => next(err));
};

/**
 * Returns details of specific user.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getUserDetails = function (req, res, next) {
  return User
    .findById(req.params.id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(err => next(err));
};

/**
 * Deletes a user with given id.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.deleteUser = function (req, res, next) {
  return User
    .findByIdAndRemove(req.params.id)
    .then((obj) => {
      // TODO: add helper method to add messages to the obj
      res.status(200).send(obj);
    })
    .catch(err => next(err));
};
