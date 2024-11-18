import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
<<<<<<< HEAD
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
=======

function Navbar(){
    return(
        <ul className={styles.list}>
            <li className={styles.item}><Link to="/">Home</Link></li>
            <li className={styles.item}><Link to="/empresa">Empresa</Link></li>
            <li className={styles.item}><Link to="/contato">Contato</Link></li>
        </ul>
>>>>>>> f472ec48dbcddf491467b1f782c8815b83818393
    )
}

export default Navbar;