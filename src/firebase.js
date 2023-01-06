import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA6H3O6EzMWnuKORgJfNO_Yc3OxMKvSXl0",
  authDomain: "fir-d74d4.firebaseapp.com",
  projectId: "fir-d74d4",
  storageBucket: "fir-d74d4.appspot.com",
  messagingSenderId: "43744904454",
  appId: "1:43744904454:web:15e667005fcf376c9b8a87"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)