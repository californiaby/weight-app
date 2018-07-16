const express = require('express');
const weightController = require('../controller/weightController');

const router = express.Router();

/** GET weight for a user. */
router.get('/', weightController.getWeight);

/** POST weight for a user. */
router.post('/', weightController.addWeight);

/** DELETE weight. */
router.delete('/', weightController.deleteWeight);

module.exports = router;
