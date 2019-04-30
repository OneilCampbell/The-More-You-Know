import React, {Component} from 'react';
import "./style.css";

class UserForm extends Component {
   constructor() {
      super()
      this.state = {
         userInfo:{
             email:"",
             name:"",
             age:"",
             score:0,
         }
      }
   }

   handleChange = (evnt) => {
       this.setState({[evnt.target.name]: evnt.target.value});
   }

   handleFormSubmit = (evnt) => {
    evnt.preventDefault();
    this.props.saveInfo(this.state.userInfo);
   }

   render() {
      return (
         <div className="form-page">
            <form onSubmit={this.props.handleFormSubmit}>
               <h3>Email</h3>
               <input type="email" name="email" placeholder="Enter Your Email Address" onChange={this.handleChange}/>
               <h3>Name</h3>
               <input type="text" name="name" placeholder="Enter Your Name" onChange={this.handleChange}/>
               <h3>Age</h3>
               <input type="number" name="age" placeholder="How Old Are You?" onChange={this.handleChange}/>
               <button type="submit" onClick={() => {this.props.nextPage("Form")}}>Submit</button>
            </form>
         </div>
      )
   }
}

export default UserForm;