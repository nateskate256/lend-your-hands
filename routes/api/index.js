
const router = require("express").Router();
const petsRoutes = require("./pets");
const favRoutes = require("./animals");

// API Routes
router.use("/pets", petsRoutes);
router.use("/favorites", favRoutes)

// If no API routes are hit, send the React app


module.exports = router;
