import styles from './ImportScopeModal.module.css'


function ImportScopeModal({isOpen, onClose}){

    if(!isOpen) return null

    return(
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.title_container}>
                    <p className={styles.modalTitle}>Importar Escopo de Normas</p>
                    <span className={styles.close} onClick={onClose}>&times;</span> 
                </div>
                <form></form>
            </div>
        </div>
    )
}

export default ImportScopeModal;