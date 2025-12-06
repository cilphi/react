import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../firebase/db.js";
import ItemList from "./ItemList";
import Loader from "./Loader.jsx";

export default function ItemListContainer (){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await (id ? getProductsByCategory(id, setItems) : getProducts(setItems))
            } catch (error) {
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [id])

    if (loading) {
        return <Loader items={[]} render={ () => null }/>
    }

    return <ItemList items={items}/>
}