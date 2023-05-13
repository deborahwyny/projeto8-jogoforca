import { useState } from "react";

function BotaoInicial ({setClick}) {



    function clicouBotao () {
        setClick(true);
    }

    return (
        <span className="">
        <button data-test="choose-word" onClick={clicouBotao} className="botao-principal">Escolher Palavra</button>
        </span>
    )
}

export default BotaoInicial;