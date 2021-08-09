'use strict';
const fs = require('fs')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let driver = fs.readFileSync('./driver.json','utf8');
    let parsedDriver = JSON.parse(driver)
   

    let data = parsedDriver.map(driv =>{
      const {lat,lon,status} = driv
      return{
        lat,
        lon,
        status,
        createdAt : new Date(),
        updatedAt: new Date(),
      }
    })
   
   await queryInterface.bulkInsert('drivers',data
  //  [
  //  {
    
  //   "lat": queryInterface.sequelize.fn('GeomFromText','POINT(4.100000 00.000000)'),
  //   "lon": queryInterface.sequelize.fn('GeomFromText','POINT(98.000000 00.000000)'),
  //   "status":"Off",
  //   "createdAt": new Date(),
  //   "updatedAt": new Date()
  //  }
  //  ]
   , {}) 

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('drivers', null, {})
  }
};
