function ExibirMiniaturasDeArquivos ({ lista } : { lista : string[] }) {
    return (
        <div>
            {lista.map(arquivo =>
                <li key={arquivo}>
                    <img src={arquivo}></img>
                </li>)
            }
        </div>
    )
} 

export default ExibirMiniaturasDeArquivos;