// dependencies, PORT, middleware, session, etc.
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// set up session and  sequelize database
const sess = {
  secret: 'Funky Town Funk',
  //  use cookies
  cookies: {},
  resave: false,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(routes);

// connect to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});