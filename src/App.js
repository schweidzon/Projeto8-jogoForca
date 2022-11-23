import { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras";
import palavras from "./palavras"

function App() {

  function getRandomWord() {
    return palavras[Math.floor(Math.random() * (palavras).length)]
  }
  const [selectedWord, setSelectedWord] = useState(getRandomWord())
  const [keyboard, setKeyboard] = useState('letter')
  const [pickedWord, setPickedWord] = useState('word hidden')
  const [disabled, setDisabled] = useState(true)





  return (
    <div>
      <Jogo words={palavras}
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord}
        getRandomWord={getRandomWord}
        setKeyboard={setKeyboard}
        pickedWord={pickedWord}
        setPickedWord={setPickedWord}
        disabled={disabled}
        setDisabled={setDisabled}
      />
      <Letras keyboard={keyboard}
        setKeyboard={setKeyboard}
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord}
        getRandomWord={getRandomWord}
        disabled={disabled}
        setDisabled={setDisabled}
      />
      <Chute
        disabled={disabled}
        setDisabled={setDisabled}
      />
    </div>
  );
}

export default App;
