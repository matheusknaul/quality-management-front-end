import styles from './SearchBar.module.css'

//Icon

import { CiSearch } from "react-icons/ci";

function SearchBar(){
    return(
        <div className={styles.search_container}>
            <div className={styles.search_container}>
                <input type="text" className={styles.search_input} placeholder='Pesquisar...'/>
            </div>
            <div className={styles.search_button_container}>
                <button className={styles.search_button}>
                <CiSearch alt="Pesquisar" className={styles.search_icon}/>
                </button>
            </div>
        </div>
    )
}

export default SearchBar;