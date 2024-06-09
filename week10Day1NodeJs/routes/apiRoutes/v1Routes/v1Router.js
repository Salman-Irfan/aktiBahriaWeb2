const express = require('express');
const bankRouter = require('./bankRoutes/bankRouter');

const v1Router = express.Router()

v1Router.use(`/bank`, bankRouter)
// v1Router.use(`/auth`, authRouter)

module.exports = v1Router