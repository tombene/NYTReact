const router = require("express").Router();
const articleRoutes = require("./articles");
const findRoutes = require("./find");

// Article routes
router.use("/articles", articleRoutes);
// NYTimes api route
router.use("/find", findRoutes);

module.exports = router;
