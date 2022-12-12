import './Shop.css'
import Header from './Header'
import ProductsList from './ProductsList'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Shop() {
  const [ products, setProducts ] = useState([]);
  const { shoppingCart, setShoppingCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addProductToCart = (product) => {
    let tempShoppingCart = [...shoppingCart];
    const newProduct = {...product};
    // Check if the product is already in the cart
    if (shoppingCart.findIndex((cartProduct) => cartProduct.title === newProduct.title) !== -1) {
      let productIndex = tempShoppingCart.findIndex((cartProduct) => cartProduct.title === newProduct.title);
      tempShoppingCart[productIndex] = {...tempShoppingCart[productIndex], amount: tempShoppingCart[productIndex].amount + 1, }
      setShoppingCart(tempShoppingCart);
    } else {
      setShoppingCart([...tempShoppingCart, {...newProduct, amount: 1}]);
    }
  }

  const showShoppingCart = () => {
    navigate('/cart');
  }

  useEffect(() => {
    axios.get("http://localhost:5001/products")
      .then((res) => {
        setProducts(res.data)
      });
  }, [])

  return (
    <div>
      <Header onCartClick={showShoppingCart}/>
      <ProductsList products={products} handleClick={addProductToCart}/>
    </div>
  );
}

export default Shop;
