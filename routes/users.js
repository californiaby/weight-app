const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

// let i = 0;

// // middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now());
//   next();
// }, (req, res, next) => {
//   console.log('Call #', i++);
//   next();
// }, (req, res, next) => {
//   console.log('Request URL:', req.originalUrl);
//   console.log('Request type:', req.method);
//   next();
// });

/** GET list of users. */
router.get('/', userController.getUsers);

/** POST user creation */
router.post('/', userController.createUser);

/** GET user details. */
router.get('/:id', userController.getUserDetails);

/** DELETE user */
router.delete('/:id', userController.deleteUser);

module.exports = router;
