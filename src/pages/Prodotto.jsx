import axios from "axios";
import { useState,  } from "react";
import { useParams } from "react-router-dom";


export default function Prodotto() {

    const urlProdotto = `https://fakestoreapi.com/products/${id}`
    const { id } = useParams();

    const [prodotto, setProdotto] = useState([])

    axios
    .get(urlProdotto)
    .then(res => 
        setProdotto(res.data)
    )



    return(
        <>
        <p>vedo personaggio con id ${prodotto.id}</p>
        
        </>
    )



}