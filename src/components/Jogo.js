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
       
    }


    // function handleClick(e) {
    //     e.currentTarget.disabled = true // tirar depois pro bônus
    //     props.setDisabled(false)
    //    // const randomWord = Array.from(props.getRandomWord())
    //     props.setKeyboard('letter active')
    //     props.setPickedWord('word')
      
    // }


   


    return (
        <>  <div className="game">
            <div className="hangman">
                <img src="./assets/forca0.png" alt="hangman" />
            </div>
            <div className="words">
                <button onClick={selectWord} className="chooseWord" >Escolher Palavra</button>
                <h1 className={props.pickedWord}>{props.underLine}</h1>
            </div>
        </div>
        </>
    )
}
