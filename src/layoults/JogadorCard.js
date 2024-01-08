import styles from './JogadorCard.module.css';
import Brasil from '../images/brasil (1).png';
import Argentina from '../images/argentina.png';

import Venezuela from '../images/venezuela.png';
import Chile from '../images/chile.png'
import Peru from '../images/peru.png';
import Guianas from '../images/guiana-francesa.png';
import Europa from '../images/uniao-europeia.png';
import Mexico from '../images/mexico.png';
import Africa from '../images/africa.png';


function JogadorCard(props) {
    return(
        <div className={styles.card}>
            <h3><strong>Nome: {props.nome}</strong></h3>
            <li>Idade: {props.idade}</li>
            <li className={styles.nacionality}>Nacionalidade: {props.nacionalidade === 'Brasil' && <img src={Brasil} />}
            {props.nacionalidade === 'Argentina' && <img src={Argentina} />}
            {props.nacionalidade === 'Venezuela' && <img src={Venezuela} />}
            {props.nacionalidade === 'Chile' && <img src={Chile} />}
            {props.nacionalidade === 'Peru' && <img src={Peru} />}
            {props.nacionalidade === 'Guianas' && <img src={Guianas} />}
            {props.nacionalidade === 'Europa' && <img src={Europa} />}
            {props.nacionalidade === 'Mexico' && <img src={Mexico} />}
            {props.nacionalidade === 'Africa' && <img src={Africa} />}</li>

            <li>Posição: {props.posicao}</li>
        </div>
    )
}

//Dar os créditos para a FreePik depois pelas imagens dos países.

export default JogadorCard