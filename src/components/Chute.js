export default function Chute(props) {
    const {disabled, setDisabled, startGame} = props
    
    return (
        <>
            <div className="shot">
                <h4>Já sei a palavra!</h4>
                <input disabled = {startGame ?  false : true}/>
                <button disabled = {startGame ?  false : true} className={startGame ? "" : "desactive"} >Chutar</button>
            </div>

        </>
    )
}