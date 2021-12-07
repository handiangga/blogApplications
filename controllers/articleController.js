const Article = require("../models/article");

class ArticleController {
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
      let payload = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tags: req.body.tags,
      };
      let data = await Article.addArticle(payload);
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  static async editArticle(req, res, next) {
    try {
      let payload = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tags: req.body.tags,
      };
      let data = await Article.editArticle(payload, req.params.id);
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  static async deleteArticle(req, res, next) {
    try {
      let data = await Article.deleteArticle(req.params.id);
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = ArticleController;
