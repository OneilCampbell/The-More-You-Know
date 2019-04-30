import React from "react";
import "./style.css";
import mp3_file from "../../Assets/Audio/PBJTime.mp3";

const EndOfGame = () => {
    return(
        <div className="game-over">
            <div className="end-game-pic"></div>
            <div className="dancing2"></div>
            <div className="sandwhich"></div>
            <div className="family-guy"></div>
            <audio autoPlay loop> <source src={mp3_file} type="audio/mp3" /> </audio>
        </div>
    )
}

export default EndOfGame;