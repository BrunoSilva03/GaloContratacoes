import styles from './Footer.module.css';
import galo from '../images/AtlMineiro30x20.png'

function Footer() {
    return(
        <footer> 
            <img src={galo}/> 
            Clube Atlético Mineiro &copy; - 2024
            <img src={galo}/></footer>
    )
}

export default Footer;