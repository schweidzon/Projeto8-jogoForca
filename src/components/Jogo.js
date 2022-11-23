//import { useState } from "react";

export default function Jogo(props) {
    let selectedWord = Array.from(props.selectedWord).map((i) => i.replace(i, "_ "))
    console.log(selectedWord)

    function handleClick(e) {
        e.currentTarget.disabled = true // tirar depois pro bônus
        props.setDisabled(false)
        const randomWord = Array.from(props.getRandomWord())
        props.setKeyboard('letter active')
        props.setSelectedWord(randomWord)
        props.setPickedWord('word')
    }





    return (
        <>  <div className="game">
            <div className="hangman">
                <img src="./assets/forca0.png" alt="hangman" />
            </div>
            <div className="words">
                <button onClick={handleClick} className="chooseWord" >Escolher Palavra</button>
                <h1 className={props.pickedWord}>{selectedWord}</h1>
            </div>
        </div>
        </>
    )
}
