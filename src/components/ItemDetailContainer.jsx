import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../firebase/db";
import ItemDetail from './ItemDetail';
import Loader from './Loader.jsx';

export default function ItemDetailContainer (){
    const [detail, setDetail] = useState()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            try {
                await getProduct(id, setDetail)
            } catch (error) {
                console.error('Error loading product:', error)
            } finally {
                setLoading(false)
            }
        }
        
        fetchData()
    }, [id])

    if (loading) {
        return <Loader items={[]} render={ () => null }/>
    }

    return (
        <ItemDetail detail={detail}/>
    )
}