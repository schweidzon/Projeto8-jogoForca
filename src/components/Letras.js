export default function Letras(props) {
    const keyboard = props.keyboard
    const setKeyboard = props.setKeyboard
    const selectedWord = props.selectedWord
    const getRandomWord = props.getRandomWord
    const setSelectedWord = props.setSelectedWord
    const disabled = props.disabled
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <div className="letters">
            {alfabeto.map((a) => <Letter letter={a} keyboard={keyboard}
                setKeyboard={setKeyboard}
                selectedWord={selectedWord}
                getRandomWord={getRandomWord}
                setSelectedWord={setSelectedWord}
                disabled={disabled}
                
            />)}
        </div>
    )
}


function Letter(props) {
    console.log(props.disabled)
    //const randomWord = Array.from(props.selectedWord)
    //console.log(randomWord)
    return (
        <ul>
            { <li disabled = {props.disabled}  className={props.keyboard}>{(props.letter).toUpperCase()}</li> }
        </ul>

    )
}