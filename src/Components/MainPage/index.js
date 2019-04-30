import React, {Component} from 'react';

import TriviaPage from "../TriviaPage";
import JokesPage from "../JokesPage";
import FlagsPage from "../FlagsPage";
import EndOfGame from "../EndOfGame";

class MainPage extends Component {
   constructor(props) {
      super(props)
      this.state = {
        userInfo: this.props.userInfo,
        URLs:[
            "https://official-joke-api.appspot.com/random_ten",
            "http://countryapi.gear.host/v1/Country/getCountries",
            "https://opentdb.com/api.php?amount=10",
        ],
        pageToRender:{
            trivia:true,
            jokes:false,
        },
        isGameOver:false,
      }
   }

   switchPage = (page) => {
        this.setState({
            pageToRender:{
                trivia:false,
                jokes:false,
                [page]:true,
            }
        })
   }

   endGame = () => {
       this.setState({isGameOver:true});
   }

   render() {
       const jokesURL = this.state.URLs[0];
       const flagsURL = this.state.URLs[1];
       const triviaURL = this.state.URLs[2];
       const renderTrivia = this.state.pageToRender.trivia;
       const renderJokes = this.state.pageToRender.jokes;
       const isGameOver = this.state.isGameOver;
       return (
            isGameOver 
            ?
            <div> <EndOfGame /> </div> 
            :
            (
                renderTrivia 
                ? 
                <div> <TriviaPage url={triviaURL} endGame={this.endGame} switchPage={this.switchPage} /> </div> 
                : 
                (
                    renderJokes 
                    ? 
                    <div><JokesPage url={jokesURL} endGame={this.endGame} switchPage={this.switchPage} /></div> 
                    :
                    <div><FlagsPage url={flagsURL} endGame={this.endGame} switchPage={this.switchPage} /></div>
                ) 
            )
        )
   }
}

export default MainPage;