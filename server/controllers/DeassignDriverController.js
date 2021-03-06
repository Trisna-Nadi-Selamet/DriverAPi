const{driver}=require('../models')

class DeassignDriverController{
    static async adddeassignDrivers(req,res){
        const id = +req.params.id
        let { lat, lon, status } = req.body;      
        try {
         let result = driver.update({
             lat,
             lon,
             status,
         },{
             where:{
                 id
             }
         })
         res.status(200).json({
             message:`Id : ${id} lat : ${lat} lon : ${lon} status : ${status} `
         });
       } catch (error) {
         res.status(500).json(error);
       }
    }
}

module.exports = DeassignDriverController