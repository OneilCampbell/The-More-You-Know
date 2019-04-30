import React, { Component } from "react";

import "./style.css";
import LandingPage from "../Components/LandingPage";
import UserForm from "../Components/UserForm";
import MainPage from "../Components/MainPage";

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInfo: {
        email: "",
        name: "",
        age: "",
        score:0,
      },
      pageOnDisplay:{
        Landing:true,
        Form:false,
        Main:false,
      }
    }
  }

  changeDisplay = (page) => {
    switch(page){
      case "Landing":
        this.setState({pageOnDisplay:{Landing:false, Form:true, Main:false}})
      break;

      default:
        this.setState({pageOnDisplay:{Landing:false, Form:false, Main:true}})
      break;
    }
  }

  saveUserData = (userInfo) => {
    this.setState({userInfo});
  }

  render() {
    let showLanding = this.state.pageOnDisplay.Landing;
    let showForm = this.state.pageOnDisplay.Form;
    let showMain = this.state.pageOnDisplay.Main;
    let userInfo = this.state.userInfo;
    return (
      <div className="App">
        { 
          showLanding 
          ? 
          <LandingPage nextPage={this.changeDisplay} /> 
          :
           (
              showForm 
              ? 
              <UserForm nextPage={this.changeDisplay} saveInfo={this.saveUserData}/>
              : 
                (
                showMain ? <MainPage userInfo={userInfo} /> : null
                )
            )
        }
      </div>
    )
  }
}

export default App;
