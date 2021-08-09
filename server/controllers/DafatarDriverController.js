const{Driver}=require('../models')

class DafatarDriverController{
    static async listDrivers(req,res){
        try{
        let drivers = await Driver.findAll({
          
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