import { Link } from 'react-router-dom'


export default function ChiSiamo() {

    return(
        <>
            <h1>Benvenuto nella sezione per scoprire chi siamo</h1>

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

            <h2>I nostri contatti </h2>
        </>
    )


}