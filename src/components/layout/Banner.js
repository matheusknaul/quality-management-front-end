import styles from './Banner.module.css'
import SearchBar from '../pages/SearchBar';

function Banner(){
    return(
        <div className={styles.banner_container}>
            <SearchBar/>
        </div>
    )
}

export default Banner;