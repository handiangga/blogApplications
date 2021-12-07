const { getDatabase } = require("../config/mongodb");
const { ObjectId } = require("bson");

class Comment {
  static findAll(articleId) {
    return getDatabase()
      .collection("Articles")
      .find({ _id: ObjectId(articleId) })
      .toArray();
  }

  static addComment(payload, id) {
    return getDatabase()
      .collection("Articles")
      .updateOne({ _id: ObjectId(id) }, { $set: { Comment: payload } });
  }
  static editComment(payload, id) {
    return getDatabase()
      .collection("Comments")
      .updateOne({ _id: ObjectId(id) }, { $set: payload });
  }

  static deleteComment(id) {
    return getDatabase()
      .collection("Comments")
      .deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = Comment;
