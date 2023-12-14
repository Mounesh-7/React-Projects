
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery'
import Cart from './Cart'
import data from './Data';
import { useState } from 'react'


function App() {

  const [cartProducts, setCartProducts] = useState([])

  const handleAddToCart = (product) => {
    setCartProducts((cartProducts) => [...cartProducts, { item: product, quantity: 1 }])
  }

  const { productItems } = data
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/cart" element={<Cart cartProducts={cartProducts} />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Gallery productItems={productItems} handleAddToCart={handleAddToCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
