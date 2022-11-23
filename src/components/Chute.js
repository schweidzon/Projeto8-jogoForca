export default function Chute(props) {
    const {disabled, setDisabled} = props
    
    return (
        <>
            <div className="shot">
                <h4>Já sei a palavra!</h4>
                <input disabled = {disabled}/>
                <button disabled = {disabled} >Chutar</button>
            </div>

        </>
    )
}