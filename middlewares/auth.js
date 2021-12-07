const { jwtVerify } = require("../helpers/jwt");
const { getDatabase } = require("../config/mongodb");
const { ObjectId } = require("bson");

async function authentication(req, res, next) {
  const { access_token } = req.headers;
  if (access_token) {
    try {
      const decoded = jwtVerify(access_token);
      console.log(decoded);
      const user = await getDatabase()
        .collection("Users")
        .findOne({ _id: ObjectId(decoded._id) });
      console.log(user);
      if (user) {
        req.user = {
          id: user._id,
          username: user.username,
        };
        next();
      } else {
        next({
          name: "notLogin",
          message: "Invalid Token",
        });
      }
    } catch (error) {
      next(error);
    }
  } else {
    next({
      name: "notLogin",
      message: "You Must Login First",
    });
  }
}

function authorization(req, res, next) {
  const { id } = req.params;
  Product.findByPk(Number(id))
    .then((data) => {
      if (data) {
        if (req.user.role === "admin" || req.user.id === data.authorId) {
          next();
        } else {
          next({
            name: "Forbidden",
            message: "forbidden to access",
          });
        }
      } else {
        next({
          name: "Not Found",
          message: "data not found",
        });
      }
    })
    .catch((err) => {
      next(err);
    });
}
module.exports = { authentication, authorization };
