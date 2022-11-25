export default function Jogo({ selectedWord, setClickedLetters, hangImage, setHangImage, pickedWord, setPickedWord, setStartGame, underLine, setUnderLine, win, setWin, wrongPlays, setWrongPlays, setKeyboard, answer, setAnswer }) {

    console.log(selectedWord)
   
    function selectWord() {
        const  choosenWord = Array.from(selectedWord)
        setAnswer(choosenWord.join(""))
        console.log(choosenWord)
        const under = choosenWord.map((letra) => letra.replace(letra, " _ "))
        setUnderLine(under)
        setPickedWord('word')
        setKeyboard('letter active')
        setStartGame(true)
        setWin(false)
        setHangImage("assets/forca0.png")
        if (win === true || wrongPlays === 6) {
            setKeyboard('letter active')
            setClickedLetters([])
            setStartGame(true)
            setWin(false)
            setStartGame(true)
            setWrongPlays(0)
        }
    }

    return (
        <>  <div className="game">
            <div className="hangman">
                <img data-test="game-image" src={hangImage} alt="hangman" />
            </div>
            <div className="words">
                <button data-test="choose-word" onClick={selectWord} className="chooseWord" >Escolher Palavra</button>
                <h1 data-test="word" data-answer={answer} className={`${pickedWord} ${hangImage === "assets/forca6.png" ? (win ? "green" : "red") : ""} ${win ? "green" : ""}`}>{underLine}</h1>
            </div>
        </div>
        </>
    )
}
