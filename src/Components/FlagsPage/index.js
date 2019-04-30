import React, {Component} from 'react';
import axios from "axios";

import "./style.css";

let reset = [];

class FlagsPage extends Component {
   constructor() {
      super()
      this.state = {
        index:0,
        flags:[],
        countries:[],
        wasClicked:false,
      }
   }

   fetchFlagData = async () => {
        let respnse = await axios(this.props.url);
        let flagData = respnse.data.Response;
        let flags = [];
        let countries = [];
        let usedIndexes = [];
        let count = 0;
        while(count < 10){
            let randIndex = Math.floor(Math.random() * flagData.length);
            while(usedIndexes.includes(randIndex)){
                randIndex = Math.floor(Math.random() * flagData.length);
            }
            usedIndexes.push(randIndex);
            flags.push((flagData[randIndex]).FlagPng);
            countries.push((flagData[randIndex]).Name);
            count++;
        }
        this.setState({index:0, flags, countries, wasClicked:false});
   }

   nextFlag = () => {
       let index = this.state.index;
       index++;
       if(index >= 10){
           this.props.endGame();
       }
       else{
           this.setState(prevState => ({...prevState, index, wasClicked:false}));
       }
   }

   revealCountry = () => {
        let resetClickState = setTimeout(this.nextFlag, 1700);
        reset.push(resetClickState);
        this.setState(prevState => ({...prevState, wasClicked:true}))
   }

   componentDidMount(){
       this.fetchFlagData();
   }

   componentWillUnmount(){
       reset.map(interval => clearTimeout(interval))
   }

   render() {
      let currIndex = this.state.index
      let currFlag = this.state.flags[currIndex];
      let currCountry = this.state.countries[currIndex];
      let showCountryName = this.state.wasClicked;
      return (
         <div className="alternate" onClick={this.revealCountry}>
            <nav className="alternate-nav">
                <ul className="alternate-ul">
                    <li className="alternate-li" onClick={() => { this.props.switchPage("trivia") }}>Trivia</li>
                    <li className="alternate-li" onClick={() => { this.props.switchPage("jokes") }}>Jokes</li>
                    <li className="alternate-li" onClick={() => { this.props.switchPage("flags") }}>Flags</li>
                </ul>
            </nav>
            <h1 className="h1-3">Which Country Has This Flag?</h1>
            <img src={currFlag} alt=""/>
            {showCountryName ? <p className="p-3">{currCountry}</p> : null}
         </div>
      )
   }
}

export default FlagsPage;