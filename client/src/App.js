import './App.css'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { createContext } from 'react';
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import { useState } from 'react'

export const CartContext = createContext({
  shoppingCart: [],
  setShoppingCart: () => {},
});

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
