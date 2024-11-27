import styles from "./IniciarChecagemModal.module.css"

function IniciarChecagemModal({isOpen, onClose}){

    if(!isOpen) return null

    return(
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.title_container}>
                    <p className={styles.modal_title}>Iniciar Checagem</p>
                    <span className={styles.close} onClick={onClose}>&times;</span>
                </div>
                <div className={styles.content_container}>
                    <p>Tem certeza que deseja iniciar a checagem das normas?</p>
                    <button>Sim</button>
                    <button>Não</button>
                </div>
                <form></form>
            </div>
        </div>
    )
}

export default IniciarChecagemModal;

