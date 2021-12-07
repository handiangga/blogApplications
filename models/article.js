const { getDatabase } = require("../config/mongodb");
const { ObjectId } = require("bson");

class Article {
  static findAll() {
    return getDatabase().collection("Articles").find().toArray();
  }

  static async findById(id) {
    try {
      let data = await getDatabase()
        .collection("Articles")
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
    return getDatabase().collection("Articles").insertOne(payload);
  }
  static editArticle(payload, id) {
    return getDatabase()
      .collection("Articles")
      .updateOne({ _id: ObjectId(id) }, { $set: payload });
  }

  static deleteArticle(id) {
    return getDatabase()
      .collection("Articles")
      .deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = Article;
