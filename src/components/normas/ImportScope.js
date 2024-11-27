import ImportScopeModal from "./ImportScopeModal";
import styles from './ImportScope.module.css'
import useModal from '../../hooks/useModal';

function ImportScope(){

    const { isOpen, openModal, closeModal} = useModal();

    return(
        <>
            <button className={styles.button} onClick={openModal}>Importar Escopo</button>
            <ImportScopeModal isOpen={isOpen} onClose={closeModal}/>
        </>
    )
}

export default ImportScope;