const express = require('express');
const router = express.Router();




var truck = require('../controller/truck_c');
var truck_middle = require('../middleware/truckmiddleware');

router.post('/insert_truck',truck_middle.single('truck_photo'),truck.insert_truck);

router.post('/update_truck',truck.update_truck);

router.post('/delete_truck',truck.delete_truck);

router.post('/show_truck',truck.show_truck);




module.exports = router;