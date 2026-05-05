import { use, useState } from "react";

function CounterFunction() {

    const [ aumento, setAumento ] = useState(0);
    const [ diminuicao, setDiminuicao ] = useState(0);

    const aumentar = () => setAumento(contador => ++contador);
    const diminuir = () => setDiminuicao(contador => ++contador);
    const subtrair = (numeroUm : number, numeroDois : number) => numeroUm - numeroDois; 

    return(
        <div>
            <h2>Contador usando hook useState</h2>
            <p>Contagem: {subtrair(aumento, diminuicao)}</p>
            <button onClick={aumentar}>Adicionar</button>
            <button onClick={diminuir}>Remover</button>
        </div>
    )
}

export default CounterFunction;