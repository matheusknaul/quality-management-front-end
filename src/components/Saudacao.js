function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `Prévia: ${algumNome}`
    }

    return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao;