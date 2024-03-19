// create a tie in to the api routes
const express = require("express");
const router = express.Router()

const reactionRoutes = require("./reaction")
const thoughtRoutes = require("./thought-routes")
const userRoutes = require("./user-routes")

router.use("/thoughts", thoughtRoutes)
router.use('/reactions', reactionRoutes)
router.use("/users", userRoutes)

module.exports = router;