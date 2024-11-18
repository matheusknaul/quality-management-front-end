import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

import Container from './Container';

function Navbar(){
    return(
        <nav className={styles.navbar}>
                <img className={styles.logo_scitec} src='/images/logo.png' alt="Logo SCiTec"/>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/normas">Normas</Link></li>
                    <li className={styles.item}><Link to="/analisecritica">Análise Crítica</Link></li>
                </ul>
        </nav>
    )
}

export default Navbar;