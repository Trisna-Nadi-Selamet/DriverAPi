const DriverRoute = require('express').Router();

const DafatarDriverController = require('../controllers/DafatarDriverController')

DriverRoute.get('/',DafatarDriverController.listDrivers)
// DriverRoute.get('/:id',DriverController.seacrchDrivers)

module.exports = DriverRoute