import { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras"
import forca0 from "./assets/images/forca0.png"

function App() {

  function getRandomWord() {
    return palavras[Math.floor(Math.random() * (palavras).length)]
  }
  const [selectedWord, setSelectedWord] = useState(getRandomWord())
  const [underLine, setUnderLine] = useState([])
  const [keyboard, setKeyboard] = useState('letter')
  const [pickedWord, setPickedWord] = useState('word hidden')
  const [clickedLetters, setClickedLetters] = useState([])
  const [startGame, setStartGame] = useState(false)
  const [hangImage, setHangImage] = useState(forca0)
  const [wrongPlays, setWrongPlays] = useState(0)
  const [win, setWin] = useState(false)
  const [guess, setGuess] = useState("")
  const [answer, setAnswer] = useState("")

  

  return (
    <div>
      <Jogo
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord}
        setKeyboard={setKeyboard}
        pickedWord={pickedWord}
        setPickedWord={setPickedWord}       
        setClickedLetters={setClickedLetters}
        underLine={underLine}
        setUnderLine={setUnderLine}     
        startGame = {startGame}         
        setStartGame={setStartGame}
        hangImage={hangImage}
        setHangImage={setHangImage}
        wrongPlays={wrongPlays}
        setWrongPlays={setWrongPlays}
        win={win}
        setWin={setWin}
        answer={answer}
        setAnswer={setAnswer}
        getRandomWord={getRandomWord}
        
      />
      <Letras
        keyboard={keyboard}
        setKeyboard={setKeyboard}
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord}
        getRandomWord={getRandomWord}
        clickedLetters={clickedLetters}
        setClickedLetters={setClickedLetters}
        underLine={underLine}
        setUnderLine={setUnderLine}
        startGame={startGame}
        setStartGame={setStartGame}        
        setHangImage={setHangImage}
        wrongPlays={wrongPlays}
        setWrongPlays={setWrongPlays}        
        setWin={setWin}

      />
      <Chute
        startGame={startGame}
        setStartGame={setStartGame}
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord}
        win={win}
        setWin={setWin}
        underLine={underLine}
        setUnderLine={setUnderLine}
        getRandomWord={getRandomWord}
        hangImage={hangImage}
        setHangImage={setHangImage}
        guess={guess}
        setGuess={setGuess}

      />
    </div>
  );
}

export default App;
