import { db, storage } from '../FirebaseConnection';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import styles from './GerenciarJogadores.module.css'
import Footer from '../layoults/Footer'
import galo from '../images/galo-20por20.png';

function GerenciarJogadores() {
    const [imgURL, setImgURL] = useState("");
    //Barra de carregamento
    const [progress, setProgress] = useState(0);

    const  handleUpload = (event) => {
        event.preventDefault();

        //O usuário pode mandar várias imagens, mas essa linha
        //basicamente faz o sistema escolher só a primeira imagem.
        const file = event.target[0]?.files[0];

        //Se não tiver nenhum arquivo, não retorna nada.
        if(!file) return;

        //"storage" é a nossa conexão com o nosso storage, colocamos o nome de storage no firebaseConnection
        //o segundo parâmetro é a pasta dentro do storage que vai armazenar as imagens
        const storageRef = ref(storage, `images/${file.name}`)

        //Esse uploadTask é para poder salvar a aplicação
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            snapshot => {
                //Aqui vai pegar a quantidade de bytes que estão sendo transferidos, dividido pelo total de bytes vezes 100
                //pra ter a porcentagem lá. Isso forma aquela tela de carregamento.
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress)
            },
            error => {
                //para caso dê algum erro no bagulho.
                alert(error);
            },
            () => {
                //Aqui é para gerar a URL da nossa imagem  para poder mostrar ela em tela e também para subir ela
                //pro firebase. 
                //ref é a nossa referência da URL
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImgURL(url);
                })
            }
        )
    }

    return(
        <div className={styles.main}>
            <form  onSubmit={handleUpload} className={styles.formulario}>
           <h1>Cadastrar Jogador</h1>
           <br />


            <input type="file"/>
            <br/><br/>
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
{/*                 Isso é uma barra de progresso, pesquisar mais depois mais para frente.
            {!imgURL && <progress value={progress} max="100" />} */}
            </form>


            
        </div>

    )
}

export default GerenciarJogadores;