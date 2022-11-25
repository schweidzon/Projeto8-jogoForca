//import { useState } from "react";

export default function Jogo(props) {
    let selectedWord = Array.from(props.selectedWord)
    console.log(selectedWord)

    function selectWord() {        
     
       console.log(props.underLine)
       const under = selectedWord.map((letra) => letra.replace(letra, " _ "))
        props.setUnderLine(under)
        props.setPickedWord('word')
        props.setKeyboard('letter active')
        props.setStartGame(true)
        props.setWin(false)
        props.setHangImage("assets/forca0.png")
        if(props.win===true || props.wrongPlays===6) {
            props.setKeyboard('letter active')
            props.setClickedLetters([])
            props.setStartGame(true)
            props.setWin(false)
            props.setStartGame(true)
            props.setWrongPlays(0)
        }
    }

   


 


   


    return (
        <>  <div className="game">
            <div className="hangman">
                <img src={props.hangImage} alt="hangman" />
            </div>
            <div className="words">
                <button onClick={selectWord} className="chooseWord" >Escolher Palavra</button>
                <h1 className={`${props.pickedWord} ${props.hangImage === "assets/forca6.png" ? (props.win ? "green" : "red") : ""} ${props.win ? "green" : ""}`}>{props.underLine}</h1>
            </div>
        </div>
        </>
    )
}
