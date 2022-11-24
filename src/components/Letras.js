export default function Letras(props) {
    const keyboard = props.keyboard
    const setKeyboard = props.setKeyboard
    const selectedWord = props.selectedWord
    const getRandomWord = props.getRandomWord
    const setSelectedWord = props.setSelectedWord
    const disabled = props.disabled
    const clickedLetters = [...props.clickedLetters]
    const setClickedLetters = props.setClickedLetters
    const underLine = [...props.underLine]
    const setUnderLine = props.setUnderLine
    const startGame = props.startGame
    const setStartGame = props.setStartGame


    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    return (
        <div className="letters">
            {alfabeto.map((a) => <Letter letter={a} keyboard={keyboard}
                setKeyboard={setKeyboard}
                selectedWord={selectedWord}
                getRandomWord={getRandomWord}
                setSelectedWord={setSelectedWord}
                disabled={disabled}
                clickedLetters={clickedLetters}
                underLine={underLine}
                setUnderLine={setUnderLine}
                setClickedLetters={setClickedLetters}
                startGame={startGame}
                setStartGame={setStartGame}
                
            />)}
        </div>
    )
}


function Letter(props) {
    const selectedWord = Array.from(props.selectedWord)


    function clique(letter) {
        const disabeLetters = [...props.clickedLetters, letter]
        props.setClickedLetters(disabeLetters)
        console.log(disabeLetters)

        //Iterar no array da palavra e verificar
        // se a letra do array selectedWord === letra clicada
        // faz váriavel chamada mostrar e iguala ela ao que ta sendo mostrado na tela (no caso seria os underlines). Depois, diz que mostrar no indice que as letras coincidiram é igual a letra, e depois seta o underLine pra mostrar essa variavel "mostrar"
        // Exemplo : selectedWord = [vaca]
        // Quando clica numa letra, começa a iterar. Caso as letra clicada seja igual a letra do selectedWord em um indice "x", entra no IF
        //dentro do if, fala que a variavel mostrar = underline (ou seja = "_, _, _, _" => pq a palavra é vaca e tem 4 letras)
        //Caso a letra cliada seja a letra A, ele vai pegar o mostrar no mesmo indice que selectedWord tem a letra A (ou seja, indice 1 e 3) e vai dizer que o mostrar (que ainda é 4 underlines) nessa posição (1 e 3) vai ser igual a letra clicada.
        //mostrar vai passar a ser (_, a, _, a) => agora seta o underline para esse valor
        //quando clicar em outra letra, por exemplo o V, faz tudo de novo
        //seta o mostrar para (_, a, _, a) e compara se a letra clicada tem na palavra selectedWord (o V tem no indice 0)
        //pega o mostrar no indice que a letra coindiciu (0) e muda para a letra
        //mostrar agora é (v, a, _, a) => seta o underline pra mostrar na tela.
        selectedWord.forEach((l, i) => { 
            if (l === letter) {
                let mostrar = props.underLine
                mostrar[i] = letter
                props.setUnderLine(mostrar)
            }
            

        })


        // for(let i = 0; i < selectedWord.length; i++) {
        //     console.log(selectedWord[i])
        //     if(selectedWord[i] === letter) {
        //         let mostrar = props.underLine               
        //         mostrar[i] = letter               
        //         props.setUnderLine(mostrar)
        //     }
        // }

    }

    return (
        <ul>
            <li >
            <button disabled={props.clickedLetters.includes(props.letter) ? true : false} onClick={() => clique(props.letter)} className={`letter ${props.startGame ? "active" : "" } ${props.clickedLetters.includes(props.letter) ? "desactive" :""}`}>{(props.letter).toUpperCase()}</button>
            </li>
        </ul>

    )
}