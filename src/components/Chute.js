export default function Chute({startGame, setStartGame, selectedWord, setSelectedWord, setWin, setUnderLine, getRandomWord,hangImage,setHangImage, guess, setGuess }) {
    const choosenWord = selectedWord

    function chutar() {
        if(guess === selectedWord) {
            setWin(true)
            setStartGame(false)
            setUnderLine(choosenWord)
            setSelectedWord(getRandomWord())
            setGuess("")
        } else {
            setStartGame(false)
            setUnderLine(choosenWord)
            setWin(false)
            setSelectedWord(getRandomWord())
            setHangImage(`assets/forca6.png`)
            console.log(hangImage)
            setGuess("")
        }   
    }
    
    return (
        <>
            <div className="shot">
                <h4>Já sei a palavra!</h4>
                <input data-test="guess-input" value={guess} onChange={(e) => setGuess(e.target.value)} disabled = {startGame ?  false : true}/>
                <button data-test="guess-button" onClick={chutar} disabled = {startGame ?  false : true} className={startGame ? "" : "desactive"} >Chutar</button>
            </div>

        </>
    )
}