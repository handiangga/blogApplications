const router = require("express").Router();
const CommentController = require("../controllers/CommentController");
const { authentication } = require("../middlewares/auth");

router.use(authentication);
router.get("/:articleId", CommentController.showAll);
router.post("/:articleId", CommentController.addComment);
router.put("/:id", CommentController.updateComment);
router.delete("/:id", CommentController.deleteComment);

module.exports = router;
