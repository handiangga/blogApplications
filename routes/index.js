const router = require("express").Router();
const articleRouters = require("./article");
const userRouters = require("./user");
const commentRouters = require("./comment");

router.use("/article", articleRouters);
router.use("/", userRouters);
router.use("/comment", commentRouters);

module.exports = router;
