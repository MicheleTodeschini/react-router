export default function HomePage() {

    return(
        <>
            <h1>Benvenuto nel nostro nuovo shop!</h1>

     <ul className='list-unstyled d-flex  gap-3'>
    <li className="nav-item">
         <a className="nav-link " aria-current="page" href="/">Home</a>
     </li>
      <li className="nav-item ">
         <a className="nav-link" aria-current="page" href="/ChiSiamo">Chi Siamo</a>
     </li>
     <li className="nav-item ">
         <a className="nav-link" aria-current="page" href="/Prodotti">Prodotti</a>
     </li>
     </ul>
        </>
    )


}