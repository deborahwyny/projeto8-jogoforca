
import React, { useState } from 'react';

import BotaoInicial from "./BotaoInicial";
import Alfabeto from "./Letras";
import ForcaImagens from "./forca";
import PalavrasSorteadas from './PalavrasSorteadas';

function Jogo (){
    const [click, setClick] = useState(false);
    const [palavra, setPalavra] = useState([]);
    const [selecionada, setSelecionada] = useState ([]);
    const [erros, setErros] = useState(0);





    return (
        <div>
          <span className='conteiner-top'>
        <ForcaImagens erros={erros}/>
        <BotaoInicial  setClick = {setClick}/>        
         </span>

        {click &&
        <PalavrasSorteadas palavra = {palavra}  setPalavra = {setPalavra} selecionada={selecionada} />
      }        
        <Alfabeto palavra={palavra} click = {click} setClick={setClick} selecionada ={selecionada} setSelecionada ={setSelecionada} setErros={setErros} erros={erros}
/>

        </div>
    )
}

export default Jogo;