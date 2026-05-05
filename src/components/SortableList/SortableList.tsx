function OrganizarLista ({lista} : {lista : string[]}) {
    return (
        <div>
            {lista.map(arquivo => 
                <li key={arquivo}>
                    <img src={arquivo} alt={arquivo} />
                </li>
            )}
        </div>
    )
}

export default OrganizarLista