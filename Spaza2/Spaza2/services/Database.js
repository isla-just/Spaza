//we will be adding our db queries and functions 
import {db} from "../Firebase"; //firestore instance

//firestore functions
import { doc, setDoc, Timestamp, collection, getDocs, addDoc, query, onSnapshot, where, orderBy, limit, deleteDoc } from "firebase/firestore"; 

//creates a document for the user in our users collection
export const createUserOnRegister=(user)=>{
    //document reference: doc(firestore init, collection name, optional - id of the document (name/id))
    const userRef = doc(db, "users", user.uid);

    //create data document
    const userData={
        email:user.email,
        merchant_id:"",
        uid:user.uid,
        language:"English"
    }
    //set a document setDoc(dumument reference, data we want to set, any additional options like merge)
    return setDoc(userRef, userData); //pass the correect one 
}


//get all stock 
export const getAllStock= async ()=>{

    const allStock=[];

    //snapshot for our users collection
    const collectionRef=query(collection(db, "stock"));
    const collectionSnapshot = await getDocs(collectionRef);

    collectionSnapshot.forEach((doc)=>{
        
        allStock.push(doc.data());
        // console.log(doc.data());
    });
    return allStock;

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

export const deleteStock= (uid) =>{
    const stockRef = doc(db, 'stock', uid);
    return deleteDoc(stockRef);
}

//CRUD FOR SALES WITH

//add new sale
export const addSale=(data)=>{
    const collectionRef=collection(db,"sales");
    return addDoc(collectionRef, data);
}

//get all sales 
export const getAllSales= async ()=>{

    const allSales=[];

    //snapshot for our users collection
    const collectionRef=query(collection(db, "sales"));
    const collectionSnapshot = await getDocs(collectionRef);

    collectionSnapshot.forEach((doc)=>{
        
        allSales.push(doc.data());
        // console.log(doc.data());
    });
    return allSales;

}


//update profile with QR 
export const updateUserData =(uid, data)=>{
    const userRef = doc(db, "users", uid);
    return setDoc(userRef, data, {merge:true}); // add the option to merge document andnot overwrite 
}

export const getUserQR=async (id)=>{
    
    const querySnapshot = await getDoc(collection(db, 'users'), where("uid", "==", id));
    var allData=[];
    // const date = dateCreated.toDate().toDateString()

    querySnapshot.forEach((doc)=>{

    const userData={
        merchant_id:doc.data().merchant_id,
        uid:doc.data().uid
    }

    allData=userData;
})
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
