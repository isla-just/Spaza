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

//get all sales 
export const getAllSales= async ()=>{

    const allSales=[];

    //snapshot for our users collection
    const collectionRef=query(collection(db, "sales"));
    const collectionSnapshot = await getDocs(collectionRef);

    collectionSnapshot.forEach((doc)=>{
        
        allSales.push(doc.data());
        console.log(doc.data());
    });
    return allSales;

}

//CRUD for stock

export const getAllStockListener=()=>{
    //returning this reference
    return query(collection(db, "stock") ,orderBy('quantity', 'asc'));
}

//add new items
export const addStock=(data)=>{
    const collectionRef=collection(db,"stock");
    return addDoc(collectionRef, data);
}

export const editStock= (uid, data) =>{
    const stockRef = doc(db, 'stock', uid);
    return setDoc(stockRef, data, {merge:true});//option to merge and not overrite
}

//get total sales 
//get count items in stock
//monthly sales counter
//sales for current month
//get all stock - sort by running low quantity
//edit stock
//add new product

//search for item by name
//get getQRCode
