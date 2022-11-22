//import { useState } from "react";

export default function Jogo(props) {

    
    function handleClick() {
        const randomWord = Array.from(props.getRandomWord())
        props.setKeyboard('letter active')
        props.setSelectedWord(randomWord )
        props.setPickedWord('word')
    }
   
    




    return (
        <>  <div className="game">
            <div className="hangman">
                <img src="./assets/forca0.png" alt="hangman" />
            </div>
            <div className="words">
                <button onClick={handleClick} className="chooseWord" >Escolher Palavra</button>
                <h1 className={props.pickedWord}>{props.selectedWord}</h1>
            </div>
        </div>
        </>
    )
}
