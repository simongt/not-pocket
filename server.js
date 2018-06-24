// Create a new Express application (web server)
const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//instantiate Helmet (basic form protection)
const helmet = require('helmet');
app.use(helmet());


//Set up auth
const bcrypt = require('bcrypt');
const saltRounds = 10;

const isLoggedIn = (request, response, next) => {
  if (!request.session.loggedIn) {
    return response.status(403).json({
      response: "FORBIDDEN"
    });
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


app.get('/stashAll.json', (request, response) => {
  Stash.all()
    .then(stash => {
      response.json(stash)
    });
});

app.get('/stashPublic.json', (request, response) => {
  Stash.public()
    .then(stash => {
      response.json(stash)
    });
});

app.get('/byUser/:id.json', (request, response) => {
  const id = request.params.id;
  Stash.byUser({
      id: id
    })
    .then(stash => {
      response.json(stash)
    });
});

app.get('/byStashID/:id.json', (request, response) => {
  const id = request.params.id;
  Stash.byStashID({
      id: id
    })
    .then(stash => {
      response.json(stash)
    });
});
//Will likely need to be changed to a redirect
app.post('/stash', (request, response) => {
  const stashInfo = request.body;
  Stash.create(stashInfo)
    .then(stash => {
      response.json(stash)
    })
})

//Will likely need to be changed to a redirect
app.put('/stash/:id', (request, response) => {
  const id = request.params.id;
  Stash.delete({
      id: id
    })
    .then(stash => {
      response.json(stash)
    })
})


app.get('/users.json', (request, response) => {
  Users.all()
    .then(user => {
      response.json(user)
    });
});


app.post('/login', (request, response) => {
  console.log(`login request user: ${request.body.username} pw: ${request.body.password}`)
  const username = request.body.username;
  const plainTextPassword = request.body.password;
  Users.findByUsername(username)
    .then(dbResp => {
      if (dbResp === null) {
        response.status(403).json({
          response: "FORBIDDEN"
        })
      } else {
        // console.log(dbResp)
        return bcrypt
          .compare(plainTextPassword, dbResp.password_digest)
          .then(res => {
            if (res === true) {
              request.session.loggedIn = true;
              request.session.user_id = dbResp.user_id;
              request.session.username = dbResp.username;
              console.log(dbResp)
              return response.status(201).json({
                response: "SUCCESS",
                userId: dbResp.id,
              });
            } else {
              response.status(403).json({
                response: "FORBIDDEN"
              });
            }
          });
      }
    });
});

app.get('/test', isLoggedIn, (request, response) => {
  response.send("if you are reading this, you are logged in")
})


app.post('/register', (request, response) => {
  console.log(`login request user: ${request.body.username} pw: ${request.body.password}`)
  const plainTextPassword = request.body.password;
  const username = request.body.username;
  Users.findByUsername(username)
    .then(dbResponseUsers => {
      if (dbResponseUsers !== null) {
        console.log(dbResponseUsers)
        response.status(303).json({
          response: "username already in use"
        })
      } else {
        bcrypt.hash(plainTextPassword, saltRounds)
          .then(hash => {
            const userData = {
              username: username,
              password_digest: hash,
            };
            return Users.create(userData);
          })
          .then(dbResp => {
            request.session.loggedIn = true;
            request.session.user_id = dbResp.user_id;
            request.session.username = dbResp.username;
            response.status(201).json({
              response: "SUCCESS",
              userId: dbResp.id,
            });
          });
      }
    })

});

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