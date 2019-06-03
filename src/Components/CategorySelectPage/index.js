import React, {Component} from 'react';
import "./style.css";

class CategorySelectPage extends Component {
   constructor() {
      super()
      this.state = {

      }
   }


   render() {
      return (
         <div className="category-selection-page">

            <h1>Which Category Would You Like To Explore?</h1>

            <div className="category" onClick={()=>{this.props.switchPage("trivia")}}>
               <h3 className="category-title">Trivia</h3>
               <p className="category-description">Are you a trivia master? Test your knowledge.</p>
            </div>

            <div className="category" onClick={()=>{this.props.switchPage("jokes")}}>
               <h3 className="category-title">Jokes</h3>
               <p className="category-description">Can you Guess the punchline of these jokes?</p>
            </div>

            <div className="category" onClick={()=>{this.props.switchPage("flags")}}>
               <h3 className="category-title">Flags</h3>
               <p className="category-description">Guess the Country that of the displayed flag.</p>
            </div>

         </div>
      )
   }
}

export default CategorySelectPage;