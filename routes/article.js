const router = require("express").Router();
const articleController = require("../controllers/articleController");
const { authentication } = require("../middlewares/auth");

router.get("/", articleController.showAll);
router.get("/:id", articleController.showById);
router.use(authentication);
router.post("/", articleController.addArticle);
router.put("/:id", articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
