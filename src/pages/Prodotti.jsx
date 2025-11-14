import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Prodotti() {

    const [prodotti, setProdotti] = useState([])

    const url = 'https://fakestoreapi.com/products'

    useEffect() // da fare con la funzione .get dopo

    function ottenereProdotti(){
        axios
        .get(url)
        .then(res=> 
            setProdotti(res.data)
        )
    }


    return(
        <>
            <h1>Benvenuto nella sezione prodotti</h1>

     <ul className='list-unstyled d-flex  gap-3'>
    <li className="nav-item">
         <Link className="nav-link " aria-current="page" to="/">Home</Link>
     </li>
      <li className="nav-item ">
         <Link className="nav-link" aria-current="page" to="/ChiSiamo">Chi Siamo</Link>
     </li>
     <li className="nav-item ">
         <Link className="nav-link" aria-current="page" to="/Prodotti">Prodotti</Link>
     </li>
     </ul>
     <div className='container'>

     </div>
        </>
    )


}