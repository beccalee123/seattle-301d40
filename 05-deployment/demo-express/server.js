'use strict';

//Load Express
const express = require('express');

//Instantiate Express so we can use it (just always call this const=app. It'll be weird if you don't)
const app = express();

//Designate a port to serve our app on. PORT must be all caps because the services that provide the ports use all caps and JS is case sensitive
const PORT = 3000;

//Define which directory that we will serve files from
app.use(express.static('./public'));

//Create a route for our bat-country file (app.get is like an event listener)
app.get('/bats', (req, res) => {
  console.log('The bats route has been hit!!! Watch out! BATS!!!');
  res.status(200).sendFile('public/bat-country.html', {root: '.'});
});

//Tell the app to listen so that it can do its thing
app.listen(PORT, () => console.log(`Our app is listening on port ${PORT}`));
