import React, { useState } from 'react';
import ImportScopeModal from "./ImportScopeModal";
import styles from './ImportScope.module.css'

function ImportScope(){

    const [isAddNormaModalOpen, setAddNormaModalOpen] = useState(false);
    
    const openModal = ()=>{
        setAddNormaModalOpen(true);
    }

    const closeModal = () =>{
        setAddNormaModalOpen(false);
    }

    return(
        <>
            <button className={styles.button} onClick={() => openModal()}>Importar Escopo</button>
            <ImportScopeModal isOpen={isAddNormaModalOpen} onClose={closeModal}/>
        </>
    )
}

export default ImportScope;