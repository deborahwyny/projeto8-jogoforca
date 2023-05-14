
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
        <li data-test="word" className="letrasSorteadas">
          {palavra.map((letra, index) => {
            return erros >= 6 ? (
              <span className="palavraSorteada errada"key={index}>
                {letra}
              </span>
            ) : (
              <span className={`palavraSorteada ${acertou ? "correta" : ""}`} key={index}>
                {selecionada.includes(letra) ? letra : '_'}
              </span>
            );
          })}
          <p>{erros}</p>
        </li>
      );
        }


export default PalavrasSorteadas;