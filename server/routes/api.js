const express = require("express");
const libraryController = require("../controllers/libraryController");
const path = require('path');

const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.get(
  "/",
  libraryController.getPlayerSummaries,
  libraryController.ownedGamesURL,
  (req, res) => {
    return res.status(200).send(res.locals.playerSummaries);
  }
);

module.exports = router;
