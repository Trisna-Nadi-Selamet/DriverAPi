
const{driver}=require('../models')
class AssignDriverController{
    static async addassignDrivers(req,res){
        let name = req.params.name        
        try{
        let assign = await driver.findAll({
        where:{
            lat,
            lon

        },
        
        })       
      res.status(200).json(assign)
      }catch(error){
        res.status(500).json(error)
    
      } 
    }
}

module.exports = AssignDriverController