import React, { useState } from 'react';
import styles from './GerenciadorNormas.module.css'
import NewNormaModal from './NewNormaModal';
import ImportScopeModal from './ImportScopeModal';
import ImportScope from './ImportScope';

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
                <button className={styles.button}>Iniciar Checagem</button>
                <ImportScope/>
            </div>
            <NewNormaModal isOpen={isAddNormaModalOpen} onClose={closeModal}/>
        </div>
    )
}

export default GerenciadorNormas;