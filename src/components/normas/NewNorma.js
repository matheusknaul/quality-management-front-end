import styles from "./NewNorma.module.css"
import NewNormaModal from "./NewNormaModal"
import useModal from "../../hooks/useModal"

function NewNorma(){

    const {isOpen, openModal, closeModal} = useModal();

    return(
        <>
            <button className={styles.button} onClick={openModal}>Adicionar Norma</button>
            <NewNormaModal isOpen={isOpen} onClose={closeModal}/>
        </>
    )
}

export default NewNorma;