import { Link } from 'react-router-dom'
import Maps from '../img/maps.png'


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

            <h2 className='mx-5'>I nostri contatti </h2>
            <h3>Ecco dove trovarci:</h3>
            <div className='container d-flex'>
                <section className='container-left'>
                    
                    <img src={Maps} />
                </section>
                <section className='container-right'>
                <p>Ci trovi esattamente al <i class="bi bi-geo-alt-fill"></i></p>
                <p>Aperti dal lunedì alle domenica, tutto il giorno tutti i giorni. <i class="bi bi-calendar-week-fill"></i></p>
                <p> Perché siamo un'e-shop, non perché scfruttiamo i nostri dipendenti. <i class="bi bi-emoji-smile-fill"></i></p>
                <ul className='list-unstyled'>Puoi contattarci chiamando <i class="bi bi-telephone-fill"></i></ul>
                <li>Non questo numero: 123456789</li>
                <li>Neanche questo: 111222333</li>
                <li>Perché scherzone, siamo incontattabili</li>
                </section>
            </div>
        </>
    )


}