
const router = require('express').Router();
const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes')

// main routes and api db routes
router.use('/', mainRoutes)
router.use('/api', apiRoutes)

module.exports = router;