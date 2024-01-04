import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCYJ3DVE9yy7hmrJgVvHK1rT9V4EPcSVos",
  authDomain: "galojogadores.firebaseapp.com",
  projectId: "galojogadores",
  storageBucket: "galojogadores.appspot.com",
  messagingSenderId: "366671644251",
  appId: "1:366671644251:web:9ea98bb08089a3b23b217e",
  measurementId: "G-Q857JR375R"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
export const storage = getStorage(firebaseApp);