const { getDatabase } = require("../config/mongodb");
const { ObjectId } = require("bson");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { jwtSign } = require("../helpers/jwt");

class User {
  static async register(payload) {
    try {
      console.log(payload);
      // check  if username is already exist
      let user = await getDatabase()
        .collection("Users")
        .findOne({ username: payload.username });
      if (user) {
        throw new Error("User already exist");
      } else {
        // insert new user
        payload.password = hashPassword(payload.password);
        user = await getDatabase().collection("Users").insertOne(payload);
        return user;
      }
    } catch (error) {
      return {
        name: "Error",
        message: error.message,
      };
    }
  }
  static async login(payload) {
    try {
      // check  if username is not registered
      let user = await getDatabase()
        .collection("Users")
        .findOne({ username: payload.username });
      if (!user) {
        throw new Error("User not registered");
      } else {
        // check if password is correct
        if (comparePassword(payload.password, user.password)) {
          let newPayload = {
            _id: user._id,
            username: user.username,
          };
          let access_token = jwtSign(newPayload);
          
          return access_token;
        } else {
          throw new Error("Password is incorrect");
        }
      }
    } catch (error) {
      return {
        name: "Error",
        message: error.message,
      };
    }
  }
}

module.exports = User;
