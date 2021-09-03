
const{driver}=require('../models')
const {Op}=require('sequelize')
class AssignDriverController{
    static async addassignDrivers(req,res){
        let name = req.params.name        
        try{
        let assign = await driver.findAll({
          where:{
             
            [Op.or]:[
            {
              lat:{
                [Op.like]:'%' + search + '%',
              },
            },
            {
              lon: {
                [Op.like]: '%' + search + '%',
              },
            },

            ]
          }
        })   
        if (driver.length > 0) {
          res.status(200).json({
            message: 'Data Semua Di Temukan',
            data: driver,
          });
        } else {
          res.status(200).json({
            message: 'Data Tidak Di Temukan',
            data: [],
          });
        }
      } catch (error) {
        res.status(500).json({
          message: error,
        });
      }    
    }
  }

module.exports = AssignDriverController