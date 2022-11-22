export default function Letras(props) {
    const keyboard = props.keyboard
    const setKeyboard = props.setKeyboard
    const selectedWord = props.selectedWord
    const getRandomWord = props.getRandomWord
    const setSelectedWord = props.setSelectedWord
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <div className="letters">
            {alfabeto.map((a) => <Letter letter={a} keyboard={keyboard}
                setKeyboard={setKeyboard}
                selectedWord={selectedWord}
                getRandomWord={getRandomWord}
                setSelectedWord={setSelectedWord}
            />)}
        </div>
    )
}


function Letter(props) {


    const randomWord = Array.from(props.selectedWord)
    function checkLetter() {
        console.log(randomWord)
      


        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === props.letter) {
               props.setSelectedWord(randomWord.map((item) =>item.replace(randomWord[i], " _ ")))
            }

        }
    }

    return (
        <ul>
            <li onClick={checkLetter} className={props.keyboard}>{(props.letter).toUpperCase()}</li>
        </ul>

    )
}