import React, { Component } from "react";

import "./style.css";
import LandingPage from "../Components/LandingPage";
import MainPage from "../Components/MainPage";

class App extends Component {
  constructor(){
    super();
    this.state = {
      pageOnDisplay:{
        Landing:true,
        Main:false,
      }
    }
  }

  changeDisplay = (page) => {
    this.setState({pageOnDisplay:{Landing:false, Main:true}})
  }


  render() {
    let showLanding = this.state.pageOnDisplay.Landing;
    return (
      <div className="App">
        { 
        showLanding 
        ? 
        <LandingPage nextPage={this.changeDisplay} /> 
        :
        <MainPage />     
        }
      </div>
    )
  }
}

export default App;
