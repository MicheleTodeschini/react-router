import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} /> 
        <Route path='/ChiSiamo' element={<ChiSiamo/>}/>
        <Route path='/Prodotti' element={<Prodotti/>}/>
        </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
