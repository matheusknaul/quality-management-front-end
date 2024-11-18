<<<<<<< HEAD
function Footer(){
    return(
        <div>Rodapé</div>
=======
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p>Rodapé </p>
        </footer>
>>>>>>> f472ec48dbcddf491467b1f782c8815b83818393
    )
}

export default Footer;