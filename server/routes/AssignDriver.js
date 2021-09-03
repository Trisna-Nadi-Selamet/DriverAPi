const DriverRoute = require('express').Router();

const AssignDriverController = require('../controllers/AssignDriverController')

DriverRoute.get('/search/:lat',AssignDriverController.addassignDrivers)

module.exports = DriverRoute