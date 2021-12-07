const router = require("express").Router();
const CommentController = require("../controllers/CommentController");

router.get("/", CommentController.showAll);
router.post("/", CommentController.addComment);
router.put("/:id", CommentController.updateComment);
router.delete("/:id", CommentController.deleteComment);

module.exports = router;
