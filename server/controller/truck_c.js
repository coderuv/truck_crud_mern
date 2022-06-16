
const truckmodel = require("../model/truckmodel");


exports.insert_truck  = (req,res)=> {
    
     let truckmodel_info = new truckmodel({
        
     name: req.body.name,
     year: req.body.year,
     model: req.body.model,
     driver:req.body.dri,
     contact_no:req.body.contact_no,
     truck_photo:"http://localhost:5000/"+req.file.path,
    
    });

    console.log(req.file);
    console.log(req.body);
    truckmodel_info.save().then(res.send({msg:"success"})).catch((err) => { res.send({msg:"error"}) });

} 


exports.update_truck  = (req,res)=> {
    
    truckmodel.update({ _id: req.body._id}, {
       
        name: req.body.name,
        year: req.body.year,
        model: req.body.model,
        driver:req.body.dri,
        contact_no:req.body.contact_no,
        truck_photo:"http://localhost:5000/"+req.file.path,
       
       }, function (err, result) {
        res.send({msg:"success"})  ;
    });

}

exports.delete_truck = function(req,res){
    const { _id } = req.body;
    
    
    truckmodel.deleteOne({_id: _id}).then(
      () => {
        res.status(200).json({
          msg: 'success'
        });
      }
    ).catch(
      (error) => {
        res.status(200).json({
          msg: 'failure'
        });
      }
    );
    
    
    }


exports.show_truck  = async (req,res)=> {
    
      let data = await truckmodel.find();
      if(data){

        res.send({msg:data});

      }

}











