import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../firebase/db";
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer (){
    const [detail, setDetail] = useState()
    const {id} = useParams()

    useEffect(()=>{
        getProduct(id, setDetail)
    }, [id])

    return (
        <ItemDetail detail={detail}/>
    )
}