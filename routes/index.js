//create a new file called index.js in the routes folder to hold the API routes
const apiRoutes = require("./api/index");
const express = require("express")
const router =express.Router()

router.use('/api', apiRoutes);

module.exports = router