import { getFirestore } from "firebase/firestore";
import firebaseApp from "./firebase_config"

import { collection, addDoc } from "firebase/firestore"; 


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export const pushRegistrationInfo = async (formDetails:any) =>{
    try {
      const docRef = await addDoc(collection(db, "registrations"),formDetails);
      console.log("Registration Saved: ", docRef.id);
    } catch (e) {
      console.error("Error saving document: ", e);
    }
}

export const pushEmailInfo = async (formDetails:any) =>{
    try {
      const docRef = await addDoc(collection(db, "subscriptions"),formDetails);
      console.log("Subscription Saved: ", docRef.id);
    } catch (e) {
      console.error("Error saving document: ", e);
    }
}

