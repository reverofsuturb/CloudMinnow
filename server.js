// required modules
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// connections and handlebar helpers
const sequelize = require("./config/connection");
const routes = require("./controllers");
const helpers = require("./utils/helpers");


const app = express();
const PORT = process.env.PORT || 3001;

// connect-session-sequelize using dotenv for masking secret
const sess = {
  secret: process.env.DB_KEY,
  cookie: { 
    maxAge: 12 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// register handlebars
const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// sync to sql database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
});
