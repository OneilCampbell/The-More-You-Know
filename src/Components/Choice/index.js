import React, {Component} from 'react';
import "./style.css";

let nextQAArr = [];
let resetStateArr = [];

class Choice extends Component {
   constructor() {
      super()
      this.state = {
         wasClicked: false,
      }
   }

   handleClick = () => {
      let nextQA = setTimeout(this.props.nextQuestion, 1000)
      nextQAArr.push(nextQA);
      let resetState = setTimeout(() => {this.setState({wasClicked:false})}, 990)
      resetStateArr.push(resetState);
      this.setState({ wasClicked:true,})
   }

   componentWillUnmount() {
      nextQAArr.map(next => clearTimeout(next))
      resetStateArr.map(reset => clearTimeout(reset))
   }

   render() {
      let isCorrect = this.props.isCorrect;
      let wasClicked = this.state.wasClicked;
      let choiceClass;
      !wasClicked 
      ? 
      choiceClass = "choice" 
      :
      (isCorrect ? choiceClass = "choice correct" : choiceClass = "choice wrong")
      return (
         <div className={choiceClass} onClick={this.handleClick}>{this.props.content}</div>
      )
   }
}

export default Choice;