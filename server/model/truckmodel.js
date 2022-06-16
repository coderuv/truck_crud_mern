// const { timeStamp } = require('console');
const mongoose = require('mongoose');
const truck_model = new mongoose.Schema({

     name: {type: String},
     year: {type: String},
     model: {type: String},
     driver: {type: String},
     contact_no: {type: String},
     truck_photo: {type: String},

  
});


const truck_info= mongoose.model('truck_info', truck_model);
module.exports = truck_info ;