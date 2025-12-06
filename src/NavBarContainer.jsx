import { useState, useEffect } from "react";
import { getCategories } from "../firebase/db";
import NavBar from "./NavBar";

export default function NavBarContainer(){
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then(cats => setCategories(cats))
    },[])

    return (
        <header>            
            <NavBar categories={categories} />
        </header>
    )
}