import { useState } from "react";

function BotaoInicial ({setClick, setPalavra, setAcertou, setErros, setSelecionada}) {



    function clicouBotao () {
        setClick(true);
        setPalavra([]);
        setAcertou(false);
        setErros(0);
        setSelecionada([])

    }

    return (
        <span className="">
        <button data-test="choose-word" onClick={clicouBotao} className="botao-principal">Escolher Palavra</button>
        </span>
    )
}

export default BotaoInicial;