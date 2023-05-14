
import palavras from "./palavras"

function  PalavrasSorteadas ({palavra, setPalavra, selecionada, acertou, erros}){

    function paralavraRecebica(ls) {
      
        if(palavra.length === 0) {
            setPalavra(ls)
        }
    }





    const geradorPalavras = Math.floor(Math.random() * palavras.length);
    const letras = palavras[geradorPalavras].split('');
    paralavraRecebica(letras);
    

    return (
        <li data-test="word" className="letrasSorteadas ">

           
            {palavra.map((letra, index)=>(
                    <span data-test="word" className={`palavraSorteada ${acertou ? "correta": ""} ${erros >= 6 ? "errada": ""}` }key={index}>
                        {selecionada.includes(letra) ? letra : '_'}
                    </span>
                    
            ))}
            
            <p>{erros}</p>

        </li>


    )
}


export default PalavrasSorteadas;