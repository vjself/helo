const bcrypt = require("bcrypt");
module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    let db = req.app.get("db");
    let result = await db.get_user([username]);
    let registeredUser = result[0];
    if (registeredUser) {
      return res.status(409).send("Username already taken.");
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      let user = await db.register([username, hash]);
      req.session.user = {
        username: user[0].username
      };
      res
        .status(201)
        .send(req.session.user)
        .catch(err => {
          err;
        });
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await req.app.get("db").get_user([username]);
    const user = foundUser[0];
    if (!user) {
      return res
        .status(401)
        .send("User not found.")
        .catch(err => {
          err;
        });
    }
    const isAuthenticated = bcrypt.compareSync(password, user.password);
    if (!isAuthenticated) {
      return res.status(403).send("Incorrect password");
    }
    req.session.user = {
      id: user.id,
      username: user.username
    };
    return res.send(req.session.user).catch(err => {
      err;
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200).catch(err => [err]);
  }
};
