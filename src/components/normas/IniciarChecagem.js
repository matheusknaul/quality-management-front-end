import styles from "./IniciarChecagem.module.css"
import IniciarChecagemModal from "./IniciarChecagemModal";
import useModal from "../../hooks/useModal";

function IniciarChecagem(){

    const { isOpen, openModal, closeModal} = useModal();

    return(
        <>
            <button className={styles.button} onClick={openModal}>Iniciar Checagem</button>
            <IniciarChecagemModal isOpen={isOpen} onClose={closeModal}/>
        </>
    )
}

export default IniciarChecagem;