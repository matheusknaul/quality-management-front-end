import {useState, useEffect} from "react"
import styles from "./IniciarChecagem.module.css"
import IniciarChecagemModal from "./IniciarChecagemModal";

function IniciarChecagem(){

    const handleKeyDown = (event) =>{
        if(event.key === "Escape" && isIniciarChecagemModalOpen === true){
            closeModal()
        }
    }

    const[isIniciarChecagemModalOpen, setIniciarChecagemModalOpen] = useState(false);

    const openModal = () =>{
        setIniciarChecagemModalOpen(true);
    }

    const closeModal = () =>{
        setIniciarChecagemModalOpen(false);
    }

    useEffect(()=>{
        const handleKeyDown = (event) =>{
            if(event.key === "Escape" && isIniciarChecagemModalOpen === true){
                closeModal()
            }
        }
        if(isIniciarChecagemModalOpen){
            window.addEventListener("keydown", handleKeyDown);
        }
        return () =>{
            window.removeEventListener("keydown", handleKeyDown);
        }
    })

    return(
        <>
            <button className={styles.button} onClick={() => openModal()}>Iniciar Checagem</button>
            <IniciarChecagemModal isOpen={isIniciarChecagemModalOpen} onClose={closeModal}/>
        </>
    )
}

export default IniciarChecagem;