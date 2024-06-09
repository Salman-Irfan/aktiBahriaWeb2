const express = require('express');
const apiRouter = require('./apiRoutes/apiRouter');

const router = express.Router()

router.use('/api', apiRouter);

module.exports = router