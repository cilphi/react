import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../firebase/db.js";
import ItemList from "./ItemList";

export default function ItemListContainer (){
    const [items, setItems] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
        id ? getProductsByCategory(id, setItems) : getProducts(setItems)
    }, [id])

    return (
        <ItemList items={items}/> 
    )
}