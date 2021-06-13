const express = require('express');
const app = express();
const path = require('path');

const apiRouter = require('./routes/api');

/*
Handle parsing request body
app.use() - makes it global, application-level middle-ware
express.json() - request body parser, It parses incoming requests with JSON payloads
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Handle requests for static files */
//app.use(express.static(path.join(__dirname, '../client')));

app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
  console.log("Production mode")
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')))
}

// catch-all router handler for any requests to an unknown route
app.use('*', (req, res) => {
  res.status(404).send("Haha it doesn't work");
});

// global error handler
app.use(function (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 404,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(err, defaultErr);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(3000);

module.exports = app;
