import React, { useState } from 'react';
import NormasList from "./NormasList";
import Container from "../layout/Container";
import Banner from "../layout/Banner";
import TableNorma from "../layout/TableNorma";

function Normas(){

    const [normas, setNormas] = useState([]);

    return(
        <div>
            <Banner/>
            <h1>Normas</h1>
            <Container>
                <NormasList onNormasLoaded={setNormas}/>
                <TableNorma normas={normas} />
            </Container>
        </div>
        
    )
}

export default Normas;