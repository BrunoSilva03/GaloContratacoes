import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logogalo from '../images/altura 150.png';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <img className={styles.logo} src={logogalo} />

            <nav className={styles.menu}>
            <ul>
                    <li>
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/jogadores">
                            <p>Jogadores</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gerenciar-jogadores">
                            <p>Gerenciar Jogadores</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;