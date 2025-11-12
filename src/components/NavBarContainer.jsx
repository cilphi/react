import { useState, useEffect } from "react";
import NavBar from "./NavBar";

/* Contenedor */

export default function NavBarContainer(){
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/category-list')
            .then(response => response.json())
            .then(data => setCategories(data));
    },[])

    return (
        <NavBar categories={categories} />
    )
}