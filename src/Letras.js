import { useState } from "react";
import palavras from "./palavras";


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Alfabeto ({palavra, click, setClick, selecionada, setSelecionada, erros, setErros}){

    const [escolhidas, setEscolhidos] = useState([]);



    function verificadorLetra (letra) {
        
        if(palavra && palavra.includes(letra) && !selecionada.includes(letra)){
            setSelecionada([...selecionada,letra])
            setEscolhidos([...escolhidas, letra])
            console.log('s ',selecionada)
        }else  {
            setEscolhidos([...escolhidas, letra])
            setErros(erros + 1)
        } if (erros + 1 >= 6) {
            setClick(false);
        }
        
    }

   


    
    return ( 
        <li className="wrapped-buttons">
            {alfabeto.map((letra)=> {
                const isDisabled = !click || escolhidas.includes(letra) || erros >= 6;
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