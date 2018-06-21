// Create a new Express application (web server)
const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));

//instantiate Helmet (basic form protection)
const helmet = require('helmet');
app.use(helmet());


//Set up auth
const bcrypt = require('bcrypt');
const saltRounds = 10;

const isLoggedIn = (request, response, next) => {
  if (!request.session.loggedIn) {
    return response.send("Sorry, you must be signed in for access to this page");
  } else {
    next();
  }
};

//Set up persistent session storage
const session = require("express-session");
const pgSession = require('connect-pg-simple')(session);
const databaseName = "notapocketclone";
const Stash = require('./models/Stash');
const Users = require('./models/Users');

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

app.get('/stash.json', (request, response) => {
  Stash.all()
    .then(stash => {
      response.json(stash)
    });
});

app.get('/users.json', (request, response) => {
  Users.all()
    .then(user => {
      response.json(user)
    });
});


app.post('/login', (request, response) => {
  const username = request.body.username;
  const plainTextPassword = request.body.password;
  Users.findByUsername(username)
    .then(dbResp => {
      return bcrypt
        .compare(plainTextPassword, dbResp.password_digest)
        .then(res => {
          if (res === true) {
            request.session.loggedIn = true;
            request.session.user_id = dbResp.user_id;
            request.session.username = dbResp.username;
            return response.send("you have logged in");
          } else {
            response.send("login failed");
          }
        });
    });
});

app.get('/test', isLoggedIn,(request,response) => {
  response.send("if you are reading this, you are logged in")
})


app.post('/register', (request, response) => {
  const plainTextPassword = request.body.password;
  bcrypt.hash(plainTextPassword, saltRounds)
    .then(hash => {
      userData = {
        username: request.body.username,
        password_digest: hash,
      };
      return Users.create(userData);
    })
    .then(dbResp => {
      request.session.loggedIn = true;
      request.session.user_id = dbResp.user_id;
      request.session.username = dbResp.username;
      response.send("new user registered");
    });
});

// Run the web server listening on the provided port.
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});