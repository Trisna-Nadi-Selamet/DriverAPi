const DriverRoute = require('express').Router();

const AktifasiDriverController = require('../controllers/AktifasiDriverController')

DriverRoute.get('/:id',AktifasiDriverController.aktifasiDrivers)
DriverRoute.put('/:id',AktifasiDriverController.addaktifasiDrivers)

module.exports = DriverRoute