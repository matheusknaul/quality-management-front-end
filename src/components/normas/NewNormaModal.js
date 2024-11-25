import styles from "./NewNormaModal.module.css"

function NewNormaModal({ isOpen, onClose }){

    if (!isOpen) return null

    return(
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.title_container}>
                    <p className={styles.modalTitle}>Adicionar Norma</p>
                    <span className={styles.close} onClick={onClose}>&times;</span> 
                </div>
                <form className={styles.form_newNorma} action="/newnorma" method="POST">
                    <div>
                        <label for="main_tag">Tag principal:</label>
                        <select id="norma" name="norma[]">
                            <option value="abnt">ABNT</option>
                            <option value="iso">ISO</option>
                            <option value="astm">ASTM</option>
                            <option value="iec">IEC</option>
                        </select>
                    </div>
                    <div>
                        <label for="number">Número:</label>
                        <input type="text" id="number" name="number"/>
                    </div>
                    <div>
                        <label for="parte">Parte:</label>
                        <input type="text" id="parte" name="parte"/>
                    </div>
                    <div>
                        <label for="ano">Ano da norma:</label>
                        <input type="text" id="ano" name="ano"/>
                    </div>
                    <button className={styles.buttonAdd} type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    )
}

export default NewNormaModal;