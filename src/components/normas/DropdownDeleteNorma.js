import {useState, useEffect} from 'react'
import styles from "./DropdownDeleteNorma.module.css"

function DropdownDeleteNorma({isOpen, onClose}){

    if (!isOpen) return null;
    
    return(
        <div className={styles.dropdown_container}>
            <div className={styles.title_container}>
                <p className={styles.title_dropdown}>Excluir Norma?</p>
                <span className={styles.close_dropdown} onClick={onClose}>&times;</span>
            </div>
            <div className={styles.dropdown_content}>
                <p className={styles.text}>
                    Todas as informações serão removidas do perfil da norma. Não é possível desfazer.
                </p>
            </div>
            <div className={styles.delete_container}>
                <button className={styles.button_delete}>Excluir</button>
            </div>
        </div>
    )
}

export default DropdownDeleteNorma;