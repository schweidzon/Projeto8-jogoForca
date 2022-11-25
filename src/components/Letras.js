export default function Letras(props) {


    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const selectedWord = Array.from(props.selectedWord)



    function clique(letter) {
        const disabeLetters = [...props.clickedLetters, letter]
        props.setClickedLetters(disabeLetters)
        console.log(disabeLetters)


        if (selectedWord.includes(letter)) {

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
        } else {
            const wrong = props.wrongPlays + 1
            props.setWrongPlays(wrong)
            console.log(wrong)
            props.setHangImage(`assets/forca${wrong}.png`)
            if (wrong === 6) {
                props.setStartGame(false)
                props.setUnderLine(selectedWord)
                props.setWin(false)
                props.setSelectedWord(props.getRandomWord())
            }
        }

        if (selectedWord.every(item => disabeLetters.includes(item))) {
            props.setWin(true)
            props.setStartGame(false)
            props.setUnderLine(selectedWord)
            props.setSelectedWord(props.getRandomWord())
        }



    }

    return (
        <div className="letters">
            {alfabeto.map(letra =>
                <button disabled={props.startGame ? (props.clickedLetters.includes(letra) ? true : false) : true} onClick={() => clique(letra)} className={`letter ${props.startGame ? "active" : ""} ${props.clickedLetters.includes(letra) ? "desactive" : ""}`}>
                    {letra.toUpperCase()}
                </button>
            )}

        </div>
    )
}

