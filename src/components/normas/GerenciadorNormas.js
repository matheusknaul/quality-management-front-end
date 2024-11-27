import React, { useState } from 'react';
import styles from './GerenciadorNormas.module.css'
import NewNormaModal from './NewNormaModal';
import ImportScope from './ImportScope';
import IniciarChecagem from './IniciarChecagem';

function GerenciadorNormas(){

    const [isAddNormaModalOpen, setAddNormaModalOpen] = useState(false);
    
    const openModal = ()=>{
        setAddNormaModalOpen(true);
    }

    const closeModal = () =>{
        setAddNormaModalOpen(false);
    }

    return(
        <div>
            <div className={styles.container_gerenciador}>
                <button className={styles.button} onClick={() => openModal()}>Adicionar Norma</button>
                <IniciarChecagem/>
                <ImportScope/>
            </div>
            <NewNormaModal isOpen={isAddNormaModalOpen} onClose={closeModal}/>
        </div>
    )
}

export default GerenciadorNormas;