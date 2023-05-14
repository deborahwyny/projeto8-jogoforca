import { useState } from "react";
import palavras from "./palavras";


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Alfabeto ({palavra, click, setClick, selecionada, setSelecionada, erros, setErros, setAcertou, acertou }){

    const [escolhidas, setEscolhidos] = useState([]);





    function verificadorLetra (letra) {
        let novaSelecao = [...selecionada, letra]
        
        if(palavra && palavra.includes(letra) && !selecionada.includes(letra)){
            setSelecionada(novaSelecao)
            setEscolhidos([...escolhidas, letra])
            console.log('s ',selecionada)
        }else  {
            setEscolhidos([...escolhidas, letra])
            setErros(erros + 1)
        } 
        
        if (erros + 1 >= 6) {
            setClick(false);
        } 
        console.log('p ', palavra)
        console.log('set ', new Set(palavra))

        if(new Set(palavra).size == novaSelecao.length){
            setClick(false)
            setAcertou(true)
        }
        
    }

   


    
    return ( 
        <li className="wrapped-buttons">
            {alfabeto.map((letra)=> {
                const isDisabled = !click || escolhidas.includes(letra) || erros >= 6 || acertou;
                return (
                    <button data-test="letter" onClick={() => verificadorLetra(letra)} disabled={isDisabled} className={`letras ${click && !escolhidas.includes(letra) ? "letrasHabilitadas" : "letras"}`}>
                        {letra}
                    </button>
                )
            })}

            
        </li>        
    )
}

export default Alfabeto;