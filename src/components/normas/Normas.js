import React, { useState } from 'react';
import NormasList from "./NormasList";
import Container from "../layout/Container";
import Banner from "./Banner";
import TableNorma from "./TableNorma";
import NewNormaModal from './NewNormaModal';

function Normas(){

    const [normas, setNormas] = useState([]);

    return(
        <div>
            <Banner/>
            <NewNormaModal/>
            <Container>
                <NormasList onNormasLoaded={setNormas}/>
                <TableNorma normas={normas} />
            </Container>
        </div>
        
    )
}

export default Normas;