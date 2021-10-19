import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'

const initializeAuthenticion=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthenticion;