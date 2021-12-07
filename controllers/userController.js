const User = require("../models/user");

class UserController {
  static async login(req, res, next) {
    try {
      let payload = {
        username: req.body.username,
        password: req.body.password,
      };
      let data = await TvSeries.login(payload);
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  static async register(req, res, next) {
    try {
      let payload = {
        username: req.body.username,
        password: req.body.password,
      };
      let data = await TvSeries.register(payload);
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = UserController;
