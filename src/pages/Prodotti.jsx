import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Prodotti() {

    const [prodotti, setProdotti] = useState([])

    const url = 'https://fakestoreapi.com/products'

    useEffect(ottenereProdotti, []) 

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

     <ul className='list-unstyled d-flex  gap-3 products-ul'>
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
        <div className='row'>
     
     {
        prodotti.map(prodotto => (
            <div key={prodotto.id} className='col-4 card py-3'>
                <div className='card-top'>
                    <img src={prodotto.image} alt={prodotto.title} />
                </div>
                <div className='card-bottom'>
                    <h3>{prodotto.title}</h3>
                    <p><strong>{prodotto.price}€</strong></p>
                    <p className='description'>{prodotto.description}</p>

                </div>
            </div>
        ))
     }


     </div>
     </div>
        </>
    )


}