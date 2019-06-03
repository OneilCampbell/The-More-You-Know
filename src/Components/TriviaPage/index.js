import React, {Component} from 'react';
import axios from "axios";

import "./style.css";
import Question from "../Question";
import Choice from "../Choice";
import SymbolsAndCodesData from "../SymbolsAndCodesData";

let currChoiceSet = [];

class TriviaPage extends Component {
   constructor() {
      super()
      this.state = {
         limit:10,
         index:0,
         questions:[],
         choices:[],
         currentQuestion:"",
         currentChoices:[],
         randomize: true,
         answerChosen:false,
      }
   }

   replaceString = (string, lookFor, replaceWith) => {
      while (string.includes(lookFor)) {
         string = string.replace(lookFor, replaceWith);
      }
      return string;
   }

   callReplaceString = (string) => {
      SymbolsAndCodesData.map(set => {
         return string = this.replaceString(string, set.entityCode, set.charSymbol);
      })
      return string;
   }

   fetchTriviaData = async () => {
      let respnse = await axios(this.props.url);
      let data = respnse.data.results;
      let questions = [];
      let choices = [];
      data.map(qASet => {
         let question = qASet.question;
         question = this.callReplaceString(question);
         questions.push(question);
         let choicesSet = []
         choicesSet.push(qASet.correct_answer, ...qASet.incorrect_answers);
         choices.push(choicesSet)
         return "";
      })
      let currentQuestion = questions[0];
      let currentChoices = choices[0];
      this.setState({limit:10, index: 0, questions, choices, currentQuestion, currentChoices }); 
   }

   nextQuestion = () => {
      let index = this.state.index;
      index++;
      if(index >= this.state.limit){
         this.props.endGame();
         return;
      }
      else{
         let questions = this.state.questions;
         let choices = this.state.choices;
         let currentQuestion = questions[index];
         let currentChoices = choices[index];
         let answerChosen = false;
         let randomize = true;
         this.setState({index, questions, choices, currentQuestion, currentChoices, answerChosen, randomize});
      }
   }

   randomizeChoices = (choiceSet) => {
      if(choiceSet.length > 1){
         let correctChoice = choiceSet[0];
         let randIndex = Math.floor(Math.random() * choiceSet.length);
         if(randIndex !== 0){
            let tempHolder = choiceSet[randIndex];
            choiceSet[randIndex] = correctChoice;
            choiceSet[0] = tempHolder;
         }
      }
      return choiceSet;
   }

   showCorrectAnswer = () => {
      let answerChosen = true;
      let randomize = false;
      this.setState(prevState => ({prevState, answerChosen, randomize}));
   }

   choseAnswer = () => this.state.answerChosen;

   componentDidMount() {
      this.fetchTriviaData();
   }

   render() {
      let currIndex = this.state.index;
      let currentQuestion = this.state.currentQuestion;
      let currentChoices = this.state.currentChoices;
      if(this.state.randomize){
         let allChoices = currentChoices.map( (choice, index) => {
            let parsedChoice = this.callReplaceString(choice);
            return (
               index === 0 
               ?
               <Choice key={index} content={parsedChoice} isCorrect={true} nextQuestion={this.nextQuestion} choseAnswer={this.choseAnswer}/> 
               :
               <Choice key={index} content={parsedChoice} isCorrect={false} nextQuestion={this.nextQuestion} choseAnswer={this.choseAnswer}/>
            )
         })
         let randChoices = this.randomizeChoices(allChoices);
         currChoiceSet = randChoices;
      }
      return (
         <div className="trivia-page">
            <nav>
               <ul>
                  <li onClick={() => { this.props.switchPage("trivia") }}>Trivia</li>
                  <li onClick={() => { this.props.switchPage("jokes") }}>Jokes</li>
                  <li onClick={() => { this.props.switchPage("flags") }}>Flags</li>
               </ul>
            </nav>
            <p className="questions-remaining">{10-currIndex} Questions Remaining</p>
            <Question question={currentQuestion}/>
            <div className="choices" onClick={()=>{this.showCorrectAnswer()}}>
               {currChoiceSet}
            </div>
         </div>
      )
   }
}

export default TriviaPage;