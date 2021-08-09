const DriverRoute = require('express').Router();

const DeassignDriverController = require('../controllers/DeassignDriverController')


DriverRoute.put('/:id',DeassignDriverController.adddeassignDrivers)


module.exports = DriverRoute