export default function Chute(props) {
    const {startGame, setStartGame, selectedWord, setSelectedWord, setWin, setUnderLine, getRandomWord,hangImage,setHangImage, chute, setChute } = props

    function chutar() {
        if(chute === selectedWord) {
            setWin(true)
            setStartGame(false)
            setUnderLine(selectedWord)
            setSelectedWord(getRandomWord())
            setChute("")
        } else {
            setStartGame(false)
            setUnderLine(selectedWord)
            setWin(false)
            setSelectedWord(getRandomWord())
            setHangImage(`assets/forca6.png`)
            console.log(hangImage)
            setChute("")
        }   
    }
    
    return (
        <>
            <div className="shot">
                <h4>Já sei a palavra!</h4>
                <input data-test="guess-input" value={chute} onChange={(e) => setChute(e.target.value)} disabled = {startGame ?  false : true}/>
                <button data-test="guess-button" onClick={chutar} disabled = {startGame ?  false : true} className={startGame ? "" : "desactive"} >Chutar</button>
            </div>

        </>
    )
}