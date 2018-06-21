// Create a new Express application (web server)
const express = require('express');
const app = express();

const path = require('path');

//instantiate Helmet (basic form protection)
const helmet = require('helmet');
app.use(helmet());



//Set up persistent session storage
const session = require("express-session");
const pgSession = require('connect-pg-simple')(session);
const databaseName = "notapocketclone";

if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
    conString = `postgres://localhost:5432/${databaseName}`;
} else if (process.env.NODE_ENV === "production") {
   conString = process.env.DATABASE_URL;
}

app.use(session({
  store: new pgSession({
    conString: conString
  }),
  saveUninitialized: true,
  secret: 'IAMTHEVERYMODELOFAMODERNMAJORGENERAL',
  resave: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));
//END persistent session storage


app.use('/static', express.static('build/static'));

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
if (process.env.NODE_ENV == "production") {
  app.get("/*", function (request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Run the web server listening on the provided port.
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});