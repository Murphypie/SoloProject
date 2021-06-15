const express = require('express');
const libraryController = require('../controllers/libraryController');

const router = express.Router();



router.get('/:appid', libraryController.getGameDetails, (req, res) => {
  return res.status(200).send(res.locals.gameDetails);
});


module.exports = router