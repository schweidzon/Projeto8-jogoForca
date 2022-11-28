import forca0 from "../assets/images/forca0.png"
import forca6 from "../assets/images/forca6.png"
import styled from "styled-components"

export default function Jogo({ selectedWord, answer, setSelectedWord, setClickedLetters, hangImage, setHangImage, pickedWord, setPickedWord, setStartGame, underLine, setUnderLine, win, setWin, setWrongPlays, setKeyboard, setAnswer, getRandomWord }) {
    console.log(selectedWord,)

    function selectWord() {
        const choosenWord = Array.from(getRandomWord())
        setSelectedWord(choosenWord.join(""))
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
    }


    return (
        <>  <Game>
            <Hangman>
                <img data-test="game-image" src={hangImage} alt="hangman" />
            </Hangman>
            <Words>
                <button data-test="choose-word" onClick={selectWord} className="chooseWord" >Escolher Palavra</button>
                <h1 data-test="word" data-answer={answer} className={`${pickedWord} ${hangImage === forca6 ? (win ? "green" : "red") : ""} ${win ? "green" : ""}`}>{underLine}</h1>
            </Words>
        </Game>
        </>
    )
}

const Game = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 35%;
`

const Hangman = styled.div`
    margin-left: 38px;
    margin-top: 59px;
    img {
        width: 400px;
        height: 466px;
    }
`

const Words = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 50%;
    button {
        margin-top: 100px;
        width: 200px;
        height: 60px!important;
        background-color: #27AE60;
        border-radius: 8px;
        border-style: none;
        color: white;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        &:active{
            box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 20px -12px inset, rgba(0, 0, 0, 0.3) 0px 10px 20px -18px inset;
        }
       
    }
    h1 {
            font-size: 50px;
            font-weight: 700;
            font-family: 'Noto Sans', sans-serif;

        }
`
