import { db } from '../FirebaseConnection'

import styles from './GerenciarJogadores.module.css'

function GerenciarJogadores() {
    return(
        <div className={styles.main}>
            <form className={styles.formulario}>
           <h1>Cadastrar Jogador</h1>
           <br />

           <label htmlFor='name'>Nome:</label>
           <input type='text'
           id='name' name='name'
           autocomplete='off'
           placeholder='Insira o nome do jogador'
           /> <br/><br/>

           <label htmlFor="idade">Idade:</label>
           <input type="number"
           id="idade" name="idade"
           autocomplete="off"
           placeholder="Insira a idade do jogador"
           /> <br/> <br/>

           <label htmlFor="nacionality">Nacionalidade:</label>
           <select id="nacionality" name="nacionality">
            <option>Selecione o país</option>
            <option>Brasil</option>
            <option>Argentina</option>
            <option>Uruguai</option>
            <option>Venezuela</option>
            <option>Chile</option>
            <option>Perú</option>
            <option>Guianas</option>
            <option>Europa</option>
            <option>México</option>
            <option>África</option>
            <option>Eua</option>
            <option>China</option>
            <option>Japão</option>
            <option>Outro</option>
           </select> <br /> <br />

           <label htmlFor="posicao">Posição:</label>
           <select id="posicao" name="posicao">
            <option>Selecione a posição do jogador</option>
            <option>Goleiro</option>
            <option>Zagueiro</option>
            <option>Lateral</option>
            <option>Volante</option>
            <option>Meia</option>
            <option>Atacante</option>
            <option>Centro-Avante</option>
           </select> <br/> <br/>

            <div className={styles.areaButton}>
                <button type="reset" className={styles.btnCancelar}>Cancelar</button>
                <button type="submit" className={styles.btnCadastrar}>Cadastrar Jogador</button>
                </div>
            </form>
        </div>
    )
}

export default GerenciarJogadores;