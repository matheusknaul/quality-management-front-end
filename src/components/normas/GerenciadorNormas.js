import styles from './GerenciadorNormas.module.css'
import ImportScope from './ImportScope';
import IniciarChecagem from './IniciarChecagem';
import NewNorma from './NewNorma';

function GerenciadorNormas(){

    return(
        <div>
            <div className={styles.container_gerenciador}>
                <NewNorma/>
                <IniciarChecagem/>
                <ImportScope/>
            </div>
        </div>
    )
}

export default GerenciadorNormas;