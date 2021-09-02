const{driver}=require('../models')

class DafatarDriverController{
    static async listDrivers(req,res){
        try{
        let drivers = await driver.findAll({
          
          order:[
                ['id','ASC']
            ]
        }) 
      res.status(200).json(drivers)
      }catch(error){
        res.status(500).json(error)
      }
      
    }
}

module.exports = DafatarDriverController