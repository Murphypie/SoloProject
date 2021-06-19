const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const libraryController = {};

const ownedGamesURL = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.steamAPIkey}&steamid=${process.env.steamID64}&include_appinfo=true&format=json`;
const playerSummariesURL = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.steamAPIkey}&steamids=${process.env.steamID64}`;

// Getting steam image
// http://media.steampowered.com/steamcommunity/public/images/apps/appid/image_logo_url.jpg

libraryController.getPlayerSummaries = (req, res, next) => {
  fetch(playerSummariesURL)
    .then(data =>data.json())
    .then((result) => {
      res.locals.playerSummaries = JSON.stringify(result);
      return next();
    })
    .catch((error) => {
      return next(error);
    });
};

libraryController.ownedGamesURL = async (req, res, next) => {
  try {
    const response = await fetch(ownedGamesURL, {
      headers: { 'Content-Type': 'application/json' },
    });
    const jsonResponse = await response.json();
    fs.writeFileSync(
      path.resolve(__dirname, './../data/ownedGames.json'),
      JSON.stringify(jsonResponse)
    );
    return next();
  } catch (error) {
    return next(error);
  }
};

libraryController.getGameDetails = (req, res, next) =>{
  const id = req.params.appid;
  //console.log(id)
  const gameDetailsURL = `https://store.steampowered.com/api/appdetails?appids=${id}&format=json`
  //console.log(gameDetailsURL);
  fetch(gameDetailsURL, {
    method: "GET",
    headers: {'Content-Type': 'application/json; charset=utf-8'},
  })
  .then(data=>data.json())
  .then((result)=>{
    res.locals.gameDetails = result;
    //res.locals.gameDetails = JSON.stringify(result);
    return next();
  })
  .catch(error=>{
    return next(error);
  })
}


module.exports = libraryController;
