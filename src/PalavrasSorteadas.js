
import palavras from "./palavras"

function PalavrasSorteadas ({palavra, setPalavra, selecionada }){

    function paralavraRecebica(ls) {
      
        if(palavra.length === 0) {
            setPalavra(ls)
        }
    }

    function validacaoPalavra(){
        
    }



    const geradorPalavras = Math.floor(Math.random() * palavras.length);
    const letras = palavras[geradorPalavras].split('');
    paralavraRecebica(letras);

    return (
        <li className="letrasSorteadas">
           
            {palavra.map((letra, index)=>(
                    <span data-test="word" className="palavraSorteada" key={index}>
                        {selecionada.includes(letra) ? letra : '_'}
                    </span>
                    
            ))}
            
             
        </li>

    )
}


export default PalavrasSorteadas;