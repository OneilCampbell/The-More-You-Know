import React, {Component} from 'react';
import axios from "axios";

import "./style.css";

let reset = [];

class JokesPage extends Component {
   constructor() {
      super()
      this.state = {
        limit:10,
        index:0,
        jokes:[],
        punchlines:[],
        currentJoke:"",
        currentPunchline:"",
        showPunchline:false,
      }
   }

   fetchJokeData = async () => {
        let respnse = await axios(this.props.url);
        let jokes = [];
        let punchlines = [];
        respnse.data.map( joke => {
            jokes.push(joke.setup);
            punchlines.push(joke.punchline);
            return "";
        })
        let currentJoke = jokes[0];
        let currentPunchline = punchlines[0];
        this.setState({limit:10, index:0, jokes, punchlines, currentJoke, currentPunchline, showPunchline:false});
   }

   nextJoke = () => {
       let index = this.state.index;
       index++;
       if(index >= this.state.limit){
           this.props.endGame();
       }
       else{
            let currentJoke = this.state.jokes[index]; 
            let currentPunchline = this.state.punchlines[index]; 
            this.setState(prevState => ({ ...prevState, index, currentJoke, currentPunchline, showPunchline: false}))
       }
   }

   handleClick = () => {
       let hideNextPunchline = setTimeout(this.nextJoke, 2500);
       reset.push(hideNextPunchline);
       this.setState(prevState => ({...prevState, showPunchline:true}));
   }

   componentDidMount() {
       this.fetchJokeData();
   }

   componentWillUnmount() {
       reset.map(timer => clearTimeout(timer));
   }

   render() {
      let currIndex = this.state.index;  
      let currJoke = this.state.currentJoke;
      let currPunchline = this.state.currentPunchline;
      let showPunchline = this.state.showPunchline;
      return (
        <div className="alternate">
            <nav className="alternate-nav">
                <ul className="alternate-ul">
                    <li className="alternate-li" onClick={() => {this.props.switchPage("trivia")}}>Trivia</li>
                    <li className="alternate-li" onClick={() => {this.props.switchPage("jokes")}}>Jokes</li>
                    <li className="alternate-li" onClick={() => {this.props.switchPage("flags")}}>Flags</li>
                </ul>
            </nav>
            <p className="questions-remaining">{10-currIndex} Questions Remaining</p>
            <div>
                <h1 className="alternate-h1">{currJoke}</h1>
                {showPunchline ? <p className="alternate-p">{currPunchline}</p> : <p className="reveal-punchline" onClick={this.handleClick}>Reveal Punchline</p>}
            </div>
        </div>
      )
   }
}

export default JokesPage;