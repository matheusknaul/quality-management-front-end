import React, { useState } from 'react';
import NormasList from "./NormasList";
import Container from "../layout/Container";
import Banner from "./Banner";
import TableNorma from "./TableNorma";

function Normas(){

    const [normas, setNormas] = useState([]);

    return(
        <div>
            <Banner/>
            <Container>
                <NormasList onNormasLoaded={setNormas}/>
                <TableNorma normas={normas} />
            </Container>
        </div>
        
    )
}

export default Normas;