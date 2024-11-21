import styles from './GerenciadorNormas.module.css'

function GerenciadorNormas(){
    return(
        <div className={styles.container_gerenciador}>
            <button className={styles.button}>Adicionar Norma</button>
            <button className={styles.button}>Iniciar Checagem</button>
            <button className={styles.button}>Importar Escopo</button>
        </div>
    )
}

export default GerenciadorNormas;