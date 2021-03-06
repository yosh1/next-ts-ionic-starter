import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export default firebase;
export const db = firebase.firestore();
