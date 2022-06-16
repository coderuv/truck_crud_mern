import React, { Component } from 'react'
import axios from 'axios';
export class Truck extends Component {


    state = {
          Load:false,
          name:'',
          year:'',
          model:'',
          driver:'',
          contact_no:'',
          truck_photo:''
              }
   

       nameinput = event => {this.setState({ name: event.target.value});}
       yearinput = event => {this.setState({ year: event.target.value});}
       modelinput = event => {this.setState({ model: event.target.value});}
       driverinput = event => {this.setState({ driver: event.target.value});}
       contact_noinput = event => {this.setState({ contact_no: event.target.value});}
       truck_photoinput = event => {this.setState({ truck_photo: event.target.files[0]});}
   
      handleSubmit = event => {
        
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('year', this.state.year);
        formData.append('model', this.state.model);
        formData.append('driver', this.state.driver);
        formData.append('contact_no', this.state.contact_no);
        formData.append('truck_photo', this.state.truck_photo);
      
   
          try{
           
              axios.post(`http://localhost:5000/admin/insert_truck`,  formData, {
              headers:{'Content-Type': 'multipart/form-data','Accept': 'multipart/form-data',"Access-Control-Allow-Origin" :"*"}
            
                
             })
              
    
         .then(res => {
          this.setState({
            Load :false,
            });
      
            if(res.data.msg=="success"){
              alert("Truck Inserted");
            }
         
       
    
      })
    }  catch(error) { 
              this.setState({
              Load :false,
              }); }
    
    
      }
  render() {
    return (
   <div>
     <center>
 
    <form onSubmit={this.handleSubmit} >
    <center> <div class="alert alert-success" role="alert"><h1> Truck - Crud </h1></div></center>
    <div className="container">
    <label><b> Truck Name</b></label>
    <input type="text"  onChange={this.nameinput}  required />
  </div>

  <div className="container">
    <label><b>Year</b></label>
    <input type="text"  onChange={this.yearinput}  required />
  </div>

  <div className="container">
    <label><b> Truck Model</b></label>
    <input type="text"  onChange={this.modelinput}  required />
  </div>


  <div className="container">
    <label><b> Truck  Driver Name</b></label>
    <input type="text"  onChange={this.driverinput}  required />
  </div>



  <div className="container">
    <label><b> Contact No </b></label>
    <input type="text"  onChange={this.contact_noinput}  required />
  </div>


  <div className="container">
    <label><b> Truck photo</b></label>
    <input type="file" className='form-control'  onChange={this.truck_photoinput}  required />
  </div>


  <div className="container">
  <button type="submit"> Insert</button>
  </div>
  
  </form>

</center>
</div>

    )
  }
}

export default Truck