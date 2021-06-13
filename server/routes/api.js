const express = require("express");
const libraryController = require("../controllers/libraryController");

const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.get(
  "/",
  libraryController.getPlayerSummaries,
  (req, res) => {
    return res.status(200).send(res.locals.playerSummaries);
  }
);

router.get(
  "/games",
  libraryController.ownedGamesURL,
  (req, res) => {
    return res.status(200).json();
  }
)

module.exports = router;
