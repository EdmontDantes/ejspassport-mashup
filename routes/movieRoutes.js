const express = require('express');
const router = express.Router();
const controller = require('../controller/thirdPartyControllers');

const { randomUsersDataController } = controller;

router.get('/movies', randomUsersDataController);

module.exports = router;