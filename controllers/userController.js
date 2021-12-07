const User = require("../models/user");

class UserController {
  static async login(req, res, next) {
    try {
      let payload = {
        username: req.body.username,
        password: req.body.password,
      };
      let data = await User.login(payload);
      res.status(200).json({ access_token: data });
    } catch (error) {
      next(error);
    }
  }
  static async register(req, res, next) {
    try {
      let payload = {
        username: req.body.username,
        password: req.body.password,
      };
      let data = await User.register(payload);
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = UserController;
