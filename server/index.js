const express = require("express");
const app = express();
app.use(express.json());
const massive = require("massive");
const mc = require("./controller");
const session = require("express-session");
require("dotenv").config();
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DB online.");
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    maxAge: 60 * 60 * 12
  })
);

//Auth
app.post("/auth/register", mc.register);
app.post("/auth/login", mc.login);
app.post("/auth/logout", mc.logout);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server popped off on ${PORT}`);
});
