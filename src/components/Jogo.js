import forca0 from "../assets/images/forca0.png"
import forca6 from "../assets/images/forca6.png"

export default function Jogo({ selectedWord, setSelectedWord, setClickedLetters, hangImage, setHangImage, pickedWord, setPickedWord, startGame, setStartGame, underLine, setUnderLine, win, setWin, wrongPlays, setWrongPlays, setKeyboard, answer, setAnswer, getRandomWord }) {
    console.log(selectedWord)
    function selectWord() {
        const choosenWord = Array.from(selectedWord)
        const under = choosenWord.map((letra) => letra.replace(letra, " _ "))
        setAnswer(choosenWord.join(""))
        setUnderLine(under)
        setPickedWord('word')
        setKeyboard('letter active')
        setStartGame(true)
        setWin(false)
        setHangImage(forca0)
        setWrongPlays(0)
        setClickedLetters([])
        // if (win === true || wrongPlays === 6) {
        //     setKeyboard('letter active')
        //     
        //     setStartGame(true)
        //     setWin(false)
        //     setStartGame(true)

        // }
    }

    return (
        <>  <div className="game">
            <div className="hangman">
                <img data-test="game-image" src={hangImage} alt="hangman" />
            </div>
            <div className="words">
                <button data-test="choose-word" onClick={selectWord} className="chooseWord" >Escolher Palavra</button>
                <h1 data-test="word" data-answer={answer} className={`${pickedWord} ${hangImage === forca6 ? (win ? "green" : "red") : ""} ${win ? "green" : ""}`}>{underLine}</h1>
            </div>
        </div>
        </>
    )
}
