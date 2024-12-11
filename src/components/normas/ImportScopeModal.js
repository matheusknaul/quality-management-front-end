import styles from './ImportScopeModal.module.css'


function ImportScopeModal({isOpen, onClose}){

    if(!isOpen) return null

    return(
        <div className={styles.modal}>
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.title_container}>
                    <p className={styles.modalTitle}>Importar Escopo de Normas</p>
                    <span className={styles.close} onClick={onClose}>&times;</span> 
                </div>
                <div className={styles.import_container}>
                    <form action='http://localhost:5000/normas/importscope' method="post" enctype="multipart/form-data">
                        <div className={styles.input_box}>
                            <input type="file" name="file"/>
                        </div>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImportScopeModal;