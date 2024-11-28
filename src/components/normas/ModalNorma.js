import styles from './ModalNorma.module.css'
import DropdownDeleteNorma from "./DropdownDeleteNorma"
import {useState} from "react"

function ModalNorma({ isOpen, onClose, norma }) {
    

    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    const closeDropdown = () =>{
      setIsOpenDropdown(false);
    }

    const openDropdown = () =>{
      setIsOpenDropdown(true);
    }

    if (!isOpen) return null;
  
    return (
      
      <div className={styles.modal} onClick={onClose}>
        
        <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.title_container}>
            <p className={styles.title}>Gerenciar Norma</p>
            <span className={styles.close} onClick={onClose}>&times;</span>
          </div>
          <div className={styles.row}>
            <p className={styles.row_title}>Código:</p>
            <p className={styles.row_description}>{norma.codigo}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.row_title}>Descrição:</p>
            <p className={styles.row_description}>{norma.descricao}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.row_title}>Ano da norma (no escopo):</p>
            <p className={styles.row_description}>{norma.ano}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.row_title}>Situação:</p>
            <p className={styles.row_description}>{norma.situacao}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.row_title}>Última verificação:</p>
            <p className={styles.row_description}>{norma.data_verificacao}</p>
          </div>
          <div className={styles.dev_container}>
            <div className={styles.title_container}>
                <p className={styles.title}>Informações de Desenvolvedor</p>
            </div>
            <p>Teste</p>
          </div>
          <div className={styles.gestao_container}>
            <button className={styles.button_delete} onClick={openDropdown}>Deletar</button>
            <DropdownDeleteNorma isOpen={isOpenDropdown} onClose={closeDropdown}/>
            <button className={styles.button_edit}>Editar</button>
          </div>
        </div>
      </div>
    );
  }

export default ModalNorma;