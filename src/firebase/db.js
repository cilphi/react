import { getFirestore, getDocs, collection, query, where, doc, getDoc, addDoc } from "firebase/firestore"; 
import { app } from './config'

export const db = getFirestore(app);

export const getProducts = async (setItems) => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const products = [];

    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
    });
    setItems (products);
    return products;
};

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categories = [];

    querySnapshot.forEach((doc) => {
        categories.push(doc.data().name);
    })

    return categories
};


export const getProductsByCategory = async (category, setItems) => {
    const q = query(collection(db, "items"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const products = [];

    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
    });
    setItems (products);
    return products;
};

export const getProduct = async (id, setItem) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const product = { ...docSnap.data(), id: docSnap.id };
        setItem(product);
        return product;
    } else {
        console.log("No such document");
        return null;
    }
};

export const createOrder = async (order) => {
    console.log(order)
    try {
        const docRef = await addDoc(collection(db, "orders"),order)
        console.log("Documento escrito con el ID" , docRef.id)
        return docRef.id
    } catch (error) {
        console.error("Error agregando esta colección" , error)
        return false
    }
}