
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
    const [acertou, setAcertou] = useState(false);







    return (
        <div>
          <span className='conteiner-top'>
        <ForcaImagens erros={erros} />
        <BotaoInicial  setClick = {setClick} setPalavra = {setPalavra}  setErros={setErros} setAcertou={setAcertou} setSelecionada={setSelecionada}/>        
         </span>

        {(click || acertou) &&
        <PalavrasSorteadas palavra = {palavra}  setPalavra = {setPalavra} selecionada={selecionada} acertou ={acertou} erros={erros}/>
      }        
        <Alfabeto palavra={palavra} click = {click} setClick={setClick} selecionada ={selecionada} setSelecionada ={setSelecionada} setErros={setErros} erros={erros} setAcertou ={setAcertou} acertou={acertou}
/>

        </div>
    )
}

export default Jogo;