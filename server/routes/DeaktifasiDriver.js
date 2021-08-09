const DriverRoute = require('express').Router();

const DeaktifasiDriverController = require('../controllers/DeaktifasiDriverController')

DriverRoute.put('/:id',DeaktifasiDriverController.adddeaktifasiDrivers)


module.exports = DriverRoute