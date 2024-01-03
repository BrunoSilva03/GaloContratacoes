import styles from './Navbar.module.css';
import logogalo from '../images/altura 150.png'

function Navbar() {
    return(
        <div className={styles.navbar}>
        <img  className={styles.logo} src={logogalo}/>

        <nav className={styles.menu}>
            <ul>
                <li><button>Home</button></li>
                <li><button>Jogadores</button></li>
                <li><button>Gerenciar Jogadores</button></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar;