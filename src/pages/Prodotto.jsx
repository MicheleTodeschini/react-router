import axios from "axios";
import { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";


export default function Prodotto() {

    const { id } = useParams();
    const urlProdotto = `https://fakestoreapi.com/products/${id}`
    
    const [prodotto, setProdotto] = useState({})
    
    
        
    
    
    
    useEffect(() => {

        axios
        .get(urlProdotto)
        .then(res => setProdotto(res.data))
           
    }, []);


    return(
        <>
        <p>vedo prodotto con id ${prodotto.id}</p>
        
        </>
    )



}