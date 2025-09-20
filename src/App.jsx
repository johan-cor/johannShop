import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from './components/ItemList/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import Contacto2 from './components/Contacto/Contact2'
import { CardProvider, CartContext } from './components/context/CartContext'
import CardWidget from './components/CardWidget/CardWidget'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout'



function App() {



  return (
    <>


      <CardProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/products/:categoria' element={<ItemListContainer />} />
            <Route path='/about' element={<Nosotros />} />
            <Route path='/contact' element={<Contacto />} />
            <Route path='/contact2' element={<Contacto2 />} />
            <Route path='/card' element={<Carrito />} />
            <Route path='/Checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CardProvider>

    </>
  )
}



export default App
