import { useState } from "react";

const imagens = ["./assets/forca0.png","./assets/forca1.png", "./assets/forca2.png", "./assets/forca3.png", "./assets/forca4.png", "./assets/forca5.png", "./assets/forca6.png"];

function ForcaImagens ({erros}){

   

    return (

        <div className="top">
             
            <img className="imagemForca" src={imagens[erros]} alt="Forca" />
        
            </div>

    )
}

export default ForcaImagens;