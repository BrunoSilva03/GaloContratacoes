import { db, storage } from '../FirebaseConnection';
import { doc, setDoc, getDoc, getDocs, collection, onSnapshot, updateDoc, deleteDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';

import styles from './GerenciarJogadores.module.css'
import camera from '../images/camera (2).png';

function GerenciarJogadores() {

    // useEffect(() => {
    //     var input = document.getElementById('photofile');
    //     var fileName = document.getElementById('file-name');


    //     input.addEventListener('change', function () {
    //         const endereco = this.value;
    //         const enderecoRefinado = endereco.replace("fakepath", '');
    //         fileName.innerHTML = enderecoRefinado;
    //     });

    // }, [])


    // useEffect(() => {
    //     let photo = document.getElementById('imgPhoto');
    //     let file = document.getElementById('photofile');

    //     console.log('photo' + photo);
    // console.log('file' + file);

    //     photo.addEventListener('click', () => {
    //         file.click();
    //     });
    // }, [])


    useEffect(() => {
        var file = document.getElementById('photofile');
        var photo = document.getElementById('imagem');

        photo.addEventListener('click', () => {
            file.click();
        })

        file.addEventListener('change', (event) => {
            let reader = new FileReader();

            reader.onload = () => {
                photo.src = reader.result;
            }

            //file.files[0] retorna todos os arquivos na posição 0
            reader.readAsDataURL(file.files[0]);
        });
    }, []);


    const [jogadores, setJogadores] = useState([]);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [posicao, setPosicao] = useState('');
    const [fotinho, setFotinho] = useState('');









    const [imgURL, setImgURL] = useState([]);
    //Barra de carregamento
    const [progress, setProgress] = useState(0);

    function limpaPhoto() {
        let photo = document.getElementById('imagem');

        photo.src = camera;
        setJogadores('');
        setIdade('');
    }

    async function handleAdd() {


        await setDoc(doc(db, "jogadores", jogadores), {
            nome: jogadores,
            idade: idade,
            nacionalidade: nacionalidade,
            posicao: posicao,
            foto: imgURL.toString(),
        })
            .then(() => {
                toast.success("Dados registrados com sucesso no banco!");
                console.log("DADOS REGISTRADOS NO BANCO COM SUCESSO!");
                setJogadores('');
                setNome('');
                setIdade('');
                setNacionalidade('');
                setPosicao('');
                console.log('limpou tudo.')
                console.log('jogadores: ' + jogadores)
                console.log('idade: ' + idade);
                console.log('imgURL: ' + imgURL.toString());
            })


    }

    const handleUpload = (event) => {
        console.log('event: ' + event);
        event.preventDefault();

        //O usuário pode mandar várias imagens, mas essa linha
        //basicamente faz o sistema escolher só a primeira imagem.
        const file = event.target[0]?.files[0];

        //Se não tiver nenhum arquivo, não retorna nada.
        if (!file) return;

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
                    setImgURL(url.toString());
                    console.log('imgURL: ' + imgURL)
                    console.log('URL: ' + url);
                })
                console.log('imgURL: ' + imgURL)
                    
            }
        )
    }

    return (
        <div className={styles.main}>
            <form onSubmit={handleUpload} className={styles.formulario}>
                <h1>Cadastrar Jogador</h1>
                <br />

                <label htmlFor="photofile">Insira a foto do jogador</label><br /><br />
                <div className="inputContainer">

                {/* <label htmlFor="photofile" className={styles.labelphoto}><img src={photoCamera} value={imgURL} className={styles.imgPhoto} /></label> */}
                <div className={styles.divInputImage}>
                    <img src={camera} alt="camera" className={styles.imagem} id="imagem"/>
                </div>

                    <input className={styles.photofile} type="file" id="photofile" name="photofile"
                        accept="image/*" />

                    <span id="file-name"></span>

                </div>
                <br /><br />



                <label htmlFor='name'>Nome:</label>
                <input type='text'
                    id='name' name='name'
                    autoComplete='off'
                    placeholder='Insira o nome do jogador'
                    value={jogadores}
                    onChange={(e) => setJogadores(e.target.value)}
                /> <br /><br />

                <label htmlFor="idade">Idade:</label>
                <input type="number"
                    id="idade" name="idade"
                    autoComplete="off"
                    placeholder="Insira a idade do jogador"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                /> <br /> <br />

                <label htmlFor="nacionality">Nacionalidade:</label>
                <select id="nacionality" name="nacionality" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)}>
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
                <select id="posicao" name="posicao" value={posicao} onChange={(e) => setPosicao(e.target.value)}>
                    <option>Selecione a posição do jogador</option>
                    <option>Goleiro</option>
                    <option>Zagueiro</option>
                    <option>Lateral</option>
                    <option>Volante</option>
                    <option>Meia</option>
                    <option>Atacante</option>
                    <option>Centro-Avante</option>
                </select> <br /> <br />

                <div className={styles.areaButton}>
                    <button type="reset" className={styles.btnCancelar} onClick={limpaPhoto}>Cancelar</button>
                    <button type="submit" className={styles.btnCadastrar} onClick={handleAdd}>Cadastrar Jogador</button>
                </div>
                {/*                 Isso é uma barra de progresso, pesquisar mais depois mais para frente.
            {!imgURL && <progress value={progress} max="100" />} */}
            </form>



        </div>

    )
}

export default GerenciarJogadores;