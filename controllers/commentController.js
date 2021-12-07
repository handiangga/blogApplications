const Article = require("../models/article");

class CommentController {
  static async showAll(req, res, next) {
    try {
      let data = await Article.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  static async showById(req, res, next) {
    try {
      let data = await Article.findById(req.params.id);
      console.log(data, "=======");
      if (data.name === "Error") {
        next({
          name: "notFound",
          message: "data not found",
        });
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      next(error);
    }
  }
  static async addArticle(req, res, next) {
    try {
      let time = new Date();
      let payload = {
        title: req.body.title,
        authors: req.body.authors,
        tags: req.body.tags,
        body: req.body.body,
        time: time,
        image: req.body.image,
      };
      let data = await Article.addArticle(payload);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async updateArticle(req, res, next) {
    try {
      let time = new Date();
      let payload = {
        title: req.body.title,
        authors: req.body.authors,
        tags: req.body.tags,
        body: req.body.body,
        time: time,
        image: req.body.image,
      };
      let findArticle = await Article.findById(req.params.id);
      if (findArticle.name === "Error") {
        next({
          name: "notFound",
          message: "data not found",
        });
      } else {
        let data = await Article.editArticle(payload, req.params.id);
        res.status(201).json(data);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async deleteArticle(req, res, next) {
    try {
      let findArticle = await Article.findById(req.params.id);
      if (findArticle.name === "Error") {
        next({
          name: "notFound",
          message: "data not found",
        });
      } else {
        let data = await Article.deleteArticle(req.params.id);
        res.status(201).json(data);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = CommentController;
