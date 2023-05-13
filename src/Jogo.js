
import React, { useState } from 'react';

import BotaoInicial from "./BotaoInicial";
import Alfabeto from "./Letras";
import ForcaImagens from "./forca";
import PalavrasSorteadas from './PalavrasSorteadas';

function Jogo (){
    const [click, setClick] = useState(false);
    const [palavra, setPalavra] = useState([]);
    const [selecionada, setSelecionada] = useState ([]);




    return (
        <div>
          <span className='conteiner-top'>
        <ForcaImagens />
        <BotaoInicial  setClick = {setClick}/>        
         </span>

        {click &&
        <PalavrasSorteadas palavra = {palavra}  setPalavra = {setPalavra} selecionada={selecionada} />
      }        
        <Alfabeto palavra={palavra} click = {click}  selecionada ={selecionada} setSelecionada ={setSelecionada}
/>

        </div>
    )
}

export default Jogo;