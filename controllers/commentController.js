const Comment = require("../models/comment");

class CommentController {
  static async showAll(req, res, next) {
    try {
      let data = await Comment.findAll(req.params.id);
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
  static async addComment(req, res, next) {
    try {
      let time = new Date();
      let payload = {
        authors: req.user.id,
        body: req.body.body,
        time: time,
      };
      let data = await Comment.addComment(payload, req.params.articleId);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async updateComment(req, res, next) {
    try {
      let time = new Date();
      let payload = {
        authors: req.user.id,
        body: req.body.body,
        time: time,
      };
      let findComment = await Comment.findById(req.params.id);
      if (findComment.name === "Error") {
        next({
          name: "notFound",
          message: "data not found",
        });
      } else {
        let data = await Comment.editComment(payload, req.params.id);
        res.status(201).json(data);
      }
    } catch (error) {
      next(error);
    }
  }
  static async deleteComment(req, res, next) {
    try {
      let findComment = await Comment.findById(req.params.id);
      if (findComment.name === "Error") {
        next({
          name: "notFound",
          message: "data not found",
        });
      } else {
        let data = await Comment.deleteComment(req.params.id);
        res.status(201).json(data);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = CommentController;
