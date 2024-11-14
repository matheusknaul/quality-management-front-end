import Item from "./Item";

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>
            </ul>
        </>
    )
}

Item.defaultPropos = {
    marca: "Faltou a marca",
    ano_lancamento: 0
}

export default List;