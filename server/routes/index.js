const router = require('express').Router()

const AktifasiRoutes = require('./AktifasiDriver')
const AssignRoutes = require('./AssignDriver')
const DriverRoutes = require('./DafatarDriver')
const DeaktifasiRoutes = require('./DeaktifasiDriver')
const DeassignRoutes = require('./DeassignDriver')

router.get('/',(req,res) => {
    res.json({
        message:"Halaman Home Driver"
    })
})

router.use('/driver_id',AktifasiRoutes)
router.use('/search',AssignRoutes)
router.use('/driver_id',DriverRoutes)
router.use('/driver_id',DeaktifasiRoutes)
router.use('/driver_id',DeassignRoutes)







module.exports =  router

