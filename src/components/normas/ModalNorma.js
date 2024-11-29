import styles from './ModalNorma.module.css'
import DropdownDeleteNorma from "./DropdownDeleteNorma"
import {useState} from "react"

function ModalNorma({ isOpen, onClose, norma }) {
    
    // before edit

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

            {/* Container do título do modal */}

            <div className={styles.infoGestao}>
              <div className={styles.title_container}>
                <p className={styles.title}>{norma.codigo}</p>

              </div>
            {/* Container da informação do dia e hora que foi verificado. */}
              <div className={styles.icons}></div>
              <div className={styles.verification_container}>
                <p className={styles.verification_text}>última verificação:</p>
                <div className={styles.verification_box}>
                  <p className={styles.verification_date}>{new Date(norma.data_verificacao).toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}</p>
                </div>
              </div>

              {/* Container do nome/descrição */}
              <div className={styles.description_container}>
                <p className={styles.description_title}>Descrição</p>
                <div className={styles.description_box}>
                  <p className={styles.description_text}>{norma.descricao}</p>
                </div>
              </div>

              {/* Container info main */}
              <div className={styles.info_container}>
                {/* Status container */}
                <div className={styles.status_container}>
                  <div className={styles.status_cabecalho}>
                    <p className={styles.situation_title}>Situação</p>
                  </div>
                  <div className={styles.box_container}>
                    <p className={styles.status}>{norma.situacao}</p>
                  </div>
                </div>
                
                {/* Ano norma do escopo container */}
                <div className={styles.anoEscopo_container}>
                  <p className={styles.anoEscopo_title}>Ano no escopo</p>
                  <div className={styles.box_container}>
                    <p className={styles.anoEscopo}>{norma.ano}</p>
                  </div>
                </div>

                {/* Container do link da norma */}
                <div className={styles.linkNorma_container}>
                  <p className={styles.link_text}>Abri no site</p>
                  <div className={styles.box_container}>
                    <p className={styles.link}>{norma.link}</p>
                  </div>
                </div>
              </div>

              {/* Atividade container */}
              <div className={styles.activity_container}>
                <p className={styles.activity_title}>Observação</p>
                <div className={styles.activity_box}>
                  <p className={styles.activity_text}>
                    Adicione uma observação sobre a verificação da norma...
                  </p>
                </div>
              </div>

              {/* Informações de desenvolvedor */}
              <div className={styles.devInfo_container}>
                <p className={styles.devInfo_title}>Informações de desenvolvedor</p>
                <div className={styles.devInfo_elements}>
                  <div className={styles.tagMainDev_container}>
                    <p className={styles.tagMainDev_title}>Tag principal</p>
                    <div className={styles.box_container}>
                      <p className={styles.tagMain_text}>{norma.tag_main}</p>
                    </div>
                  </div>

                  <div className={styles.numberDev_container}>
                    <p className={styles.numberDev_title}>Número</p>
                    <div className={styles.box_container}>
                      <p className={styles.number_text}>{norma.number}</p>
                    </div>
                  </div>

                  <div className={styles.partDev_container}>
                    <p className={styles.partDev_title}>Parte</p>
                    <div className={styles.box_container}>
                      <p className={styles.part_text}>{norma.part}</p>
                    </div>
                  </div>

                  <div className={styles.anoDev_container}>
                    <p className={styles.yearDev_title}>Ano</p>
                    <div className={styles.box_container}>
                      <p className={styles.year_text}>{norma.ano}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.gestao_container}>
              <div className={styles.close_modal}>
                <span className={styles.close} onClick={onClose}>&times;</span>
              </div>

              <div className={styles.button_gestao_container}>
                <p className={styles.acoes}>Ações</p>
                <div className={styles.gestao_buttons}>
                  <button className={styles.button_edit}>Editar</button>
                  <button className={styles.button_delete} onClick={openDropdown}>Deletar</button>
                  <DropdownDeleteNorma isOpen={isOpenDropdown} onClose={closeDropdown}/>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }

export default ModalNorma;