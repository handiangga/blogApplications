const router = require("express").Router();
const articleController = require("../controllers/articleController");

router.get("/", articleController.showAll);
router.get("/:id", articleController.showById);
router.post("/", articleController.addArticle);
router.put("/:id", articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
