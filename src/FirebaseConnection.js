import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBOETsyy25p1gJY_SX8f17T8FV1G6v2bEo",
  authDomain: "galocontratacoes-f8410.firebaseapp.com",
  projectId: "galocontratacoes-f8410",
  storageBucket: "galocontratacoes-f8410.appspot.com",
  messagingSenderId: "815251749911",
  appId: "1:815251749911:web:59cd72cec9253c90b57052",
  measurementId: "G-WZ1RHHH8P3"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
export const storage = getStorage(firebaseApp);