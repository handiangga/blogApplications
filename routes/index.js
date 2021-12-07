const router = require("express").Router();
const articleRouters = require("./article");
const commentRouters = require("./comment");

router.use("/article", articleRouters);
router.use("/comment", commentRouters);

module.exports = router;
