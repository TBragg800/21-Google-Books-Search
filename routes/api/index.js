const router = require("express").Router();
const googleRoutes = require("./google");
const bookRoutes = require("./books");


// Book routes
router.use("/books", bookRoutes);
router.use("/google", googleRoutes);

module.exports = router;
