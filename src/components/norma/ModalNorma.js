import {useState} from 'react'
import styles from './ModalNorma.module.css'

function ModalNorma(){

    const [teste, setTeste] = useState(1);

    function fecharModal(){
        setTeste(1);
    }

    function abrirModal(){
        setTeste(0);
    }

    return(
        <>
        <button onClick={abrirModal} className={styles.modalBtn}> Abrir modal</button>
        {teste === 0 &&(
            <div className={styles.modal}>
                <div className={styles.content}>
                    <h3>Título do modal da norma</h3>
                    <p>Informação 1</p>
                    <p>Informação 2</p>
                    <p>Informação 3</p>
                    <button onClick={fecharModal}>Fechar</button>
                </div>
            </div>
        )}
        </>
    )
}

export default ModalNorma;