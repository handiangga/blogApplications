const { getDatabase } = require("../config/mongodb");
const { ObjectId } = require("bson");

class Article {
  static findAll() {
    return getDatabase().collection("Article").find().toArray();
  }

  static async findById(id) {
    try {
      let data = await getDatabase()
        .collection("Article")
        .find({ _id: ObjectId(id) })
        .toArray();
      return data;
    } catch (error) {
      return {
        name: "Error",
        message: error,
      };
    }
  }

  static addArticle(payload) {
    return getDatabase().collection("Article").insertOne(payload);
  }

  static editMovie(payload, id) {
    return getDatabase()
      .collection("Article")
      .updateOne(
        {
          _id: ObjectId(id),
        },
        {
          $set: payload,
        }
      );
  }

  static deleteArticle(id) {
    return getDatabase()
      .collection("Article")
      .deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = Article;
