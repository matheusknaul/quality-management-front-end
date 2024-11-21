import styles from './Banner.module.css'
import SearchBar from './SearchBar';
import GerenciadorNormas from './GerenciadorNormas';

function Banner(){
    return(
        <div className={styles.banner_container}>
            <SearchBar className={styles.banner_element}/>
            <GerenciadorNormas className={styles.banner_element}/>
        </div>
    )
}

export default Banner;