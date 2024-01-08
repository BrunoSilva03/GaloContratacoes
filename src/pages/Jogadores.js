import { useState, useEffect } from 'react';
import { doc, setDoc, getDoc, getDocs, collection, onSnapshot, updateDoc,  deleteDoc } from 'firebase/firestore';
import { db } from '../FirebaseConnection';
import styles from './Jogadores.module.css';

function Jogadores() {
    const [soccers, setSoccers] = useState([]);

    //Esse é o processo de listar os jogadores!!!
    useEffect(() => {
        async function loadJogadores() {
            const unsub = onSnapshot(collection(db, "jogadores"), (snapshot) => {
                let listaJogadores =[];

                snapshot.forEach((jogador) => {
                    listaJogadores.push({
                        id: jogador.id,
                        nome: jogador.data().nome,
                        idade: jogador.data().idade,
                        nacionalidade: jogador.data().nacionalidade,
                        posicao: jogador.data().posicao,
                    })
                })

                setSoccers(listaJogadores);
            })
        }

        loadJogadores();
    }, [])


    async function handleRead() {
        const jogadoresRef = collection(db, "jogadores");

        await getDocs(jogadoresRef)
        .then((snapshot) => {
            let lista = [];

            snapshot.forEach((item) => {
                lista.push({
                    id: item.id,
                    nome: item.data().nome,
                    idade: item.data().idade,
                    nacionalidade: item.data().nacionalidade,
                    posicao: item.data().posicao,

                })

                console.log("DEU CERTO, MOSTRANDO PESSOAS COM SUCESSO!!!")
            })

            setSoccers(lista);
        })
    }
    return(
        <div className="containerMain">
            <ul>
                {soccers.map((jogador) => {
                    return(
                        <li key={jogador.id}>
                            <span><strong>Nome: {jogador.nome}</strong></span>
                            <span>Idade: {jogador.idade}</span>
                            <span>Nacionalidade: {jogador.nacionalidade}</span>
                            <span>Posição: {jogador.posicao}</span>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Jogadores;