const router = require("express").Router();
const articleRouters = require("./article");
// const tvSeriesRouters = require("./tvSeries");

router.use("/article", articleRouters);
// router.use("/tv-series", tvSeriesRouters);

module.exports = router;
