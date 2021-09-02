
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
        //     include: [
        //           { model: lat  },
        //           { model: lon },    
        //  ],
        //  attributes: [
        //     'get.*',
        //     [sequelize.literal(' (6371 * acos ( '
        //         + 'cos( radians('+lat+') ) '
        //         + '* cos( radians( get.lat ) ) '
        //         + '* cos( radians( get.lon ) - radians('+lon+') )' 
        //         + '+ sin( radians('+lat+') )' 
        //         + '* sin( radians( get.lat )))) ' ), 'distance']
        // ],
        })       
      res.status(200).json(assign)
      }catch(error){
        res.status(500).json(error)
    
      } 
    }
}

module.exports = AssignDriverController