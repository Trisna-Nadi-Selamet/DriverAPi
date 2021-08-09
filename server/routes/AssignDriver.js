const DriverRoute = require('express').Router();

const AssignDriverController = require('../controllers/AssignDriverController')

DriverRoute.get('/:lat/:lon',AssignDriverController.addassignDrivers)


module.exports = DriverRoute