import React from "react";
import "./style.css";
import mp3_file from "../../Assets/Audio/PBJTime.mp3";

const LandingPage = (props) => {
    return(
       <div className="landing">
            <h1>The More Ya Know</h1>
            <div className="dancing-banana"></div>
            <div className="question-mark-gif"></div>
            <div className="buttn" onClick={() => {props.nextPage("next")}}>Start!</div>
            <audio autoPlay loop><source src={mp3_file} type="audio/mp3" /></audio>
        </div>
        
    )
}

export default LandingPage;