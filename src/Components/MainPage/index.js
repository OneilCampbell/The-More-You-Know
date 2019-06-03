import React, {Component} from 'react';

import CategorySelectPage from "../CategorySelectPage";
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
            select: true,
            trivia:false,
            jokes:false,
            flags: false,
        },
        isGameOver:false,
      }
   }

   switchPage = (page) => {
        this.setState({
            pageToRender:{
                select:false,
                trivia:false,
                jokes:false,
                flags:false,
                [page]:true,
            }
        })
   }

   endGame = () => {
       this.setState({isGameOver:true});
   }

   render() {
       const allURLs = this.state.URLs;
       const renderPage = this.state.pageToRender;
       const isGameOver = this.state.isGameOver;
       return (
            isGameOver 
            ?
            <div> <EndOfGame /> </div> 
            :
            (
                renderPage.select 
                ?
                <CategorySelectPage switchPage={this.switchPage} />
                :
                (
                    renderPage.trivia
                    ?
                    <TriviaPage url={allURLs[2]} endGame={this.endGame} switchPage={this.switchPage} />
                    :
                    (
                        renderPage.jokes 
                        ? 
                        <JokesPage url={allURLs[0]} endGame={this.endGame} switchPage={this.switchPage} /> 
                        :
                        <FlagsPage url={allURLs[1]} endGame={this.endGame} switchPage={this.switchPage} />
                    )
                )     
            )
        )
   }
}

export default MainPage;