import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

/* Contenedor */

export default function ItemListContainer (){
    const [items, setItems] = useState([]);
    const {id} = useParams()

    useEffect(()=>{

    const urlCategories = `https://dummyjson.com/products/category/${id}`
    const urlProductos = `https://dummyjson.com/products`

    fetch(id ? urlCategories : urlProductos)
            .then(res => res.json())
            .then(data => setItems(data.products))
    }, [id])

    return (
        <ItemList items={items}/> 
    )
}