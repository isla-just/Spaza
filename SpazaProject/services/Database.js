//we will be adding our db queries and functions 
import {db} from "../Firebase"; //firestore instance

//firestore functions
import { doc, setDoc, Timestamp, collection, getDocs, addDoc, query, onSnapshot, where, orderBy, limit } from "firebase/firestore"; 

//creates a document for the user in our users collection
export const createUserOnRegister=(user)=>{
    //document reference: doc(firestore init, collection name, optional - id of the document (name/id))
    const userRef = doc(db, "users", user.uid);

    //create data document
    const userData={
        email:user.email,
        merchant_id:1,
        uid:user.uid,
        language:"English"
    }
    //set a document setDoc(dumument reference, data we want to set, any additional options like merge)
    return setDoc(userRef, userData); //pass the correect one 
}
