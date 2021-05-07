
const router = require("express").Router();
const petsRoutes = require("./pets");

// API Routes
router.use("/pets", petsRoutes);

// If no API routes are hit, send the React app


module.exports = router;
