import forca0 from "../assets/images/forca0.png"
import forca1 from "../assets/images/forca1.png"
import forca2 from "../assets/images/forca2.png"
import forca3 from "../assets/images/forca3.png"
import forca4 from "../assets/images/forca4.png"
import forca5 from "../assets/images/forca5.png"
import forca6 from "../assets/images/forca6.png"
import styled from "styled-components"



export default function Letras({ selectedWord, setSelectedWord, clickedLetters, setClickedLetters, underLine, setUnderLine, wrongPlays, setWrongPlays, setHangImage, startGame, setStartGame, setWin, getRandomWord, hangImage }) {
    console.log(wrongPlays)

    function changeImage() {
        if (wrongPlays + 1 === 0) {
            return forca0
        }
        if (wrongPlays + 1 === 1) {
            return forca1
        }
        if (wrongPlays + 1 === 2) {
            return forca2
        }
        if (wrongPlays + 1 === 3) {
            return forca3
        }
        if (wrongPlays + 1 === 4) {
            return forca4
        }
        if (wrongPlays + 1 === 5) {
            return forca5
        }
        if (wrongPlays + 1 === 6) {
            return forca6
        }

    }
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const choosenWord = Array.from(selectedWord)
    function click(letter) {


        const disabeLetters = [...clickedLetters, letter]
        setClickedLetters(disabeLetters)
        if (choosenWord.includes(letter)) {

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
            choosenWord.forEach((l, i) => {
                if (l === letter) {
                    let mostrar = underLine
                    mostrar[i] = letter
                    setUnderLine(mostrar)
                }


            })

        } else {
            const wrong = wrongPlays + 1
            setWrongPlays(wrong)
            console.log(wrong)
            setHangImage(changeImage)
            console.log(hangImage)
            if (wrong === 6) {
                setStartGame(false)
                setUnderLine(selectedWord)
                setWin(false)
                setSelectedWord(getRandomWord())
            }
        }

        if (choosenWord.every(item => disabeLetters.includes(item))) {
            setWin(true)
            setStartGame(false)
            setUnderLine(selectedWord)
            setSelectedWord(getRandomWord())
        }
    }

    return (
        <Letters>
            {alfabeto.map(letra =>
                <button data-test="letter" disabled={startGame ? (clickedLetters.includes(letra) ? true : false) : true} onClick={() => click(letra)} className={`letter ${startGame ? "active" : ""} ${clickedLetters.includes(letra) ? "desactive" : ""}`}>
                    {letra.toUpperCase()}
                </button>
            )}

        </Letters>
    )
}

const Letters = styled.div`
   display: flex;
    gap: 10px;
    width: fit-content;
    margin: auto;
    width: 664px;
    flex-wrap: wrap;
    margin-top: 70px;
`


