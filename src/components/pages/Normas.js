import NormasList from "./NormasList";
import Container from "../layout/Container";
import Banner from "../layout/Banner";

function Normas(){
    return(
        <div>
            <Banner/>
            <h1>Normas</h1>
            <Container>
                <h1>Teste</h1>
                <NormasList/>
            </Container>
        </div>
        
    )
}

export default Normas;