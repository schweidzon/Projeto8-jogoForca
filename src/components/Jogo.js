export default function Jogo({ selectedWord, setClickedLetters, hangImage, setHangImage, pickedWord, setPickedWord, startGame, setStartGame, underLine, setUnderLine, win, setWin, wrongPlays, setWrongPlays, setKeyboard }) {

    console.log(selectedWord)
    let choosenWord;
    function selectWord() {
        choosenWord = Array.from(selectedWord)
        console.log(choosenWord)
        console.log(underLine)
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
                <h1 data-test="word" data-answer={startGame ? choosenWord : ""} className={`${pickedWord} ${hangImage === "assets/forca6.png" ? (win ? "green" : "red") : ""} ${win ? "green" : ""}`}>{underLine}</h1>
            </div>
        </div>
        </>
    )
}
