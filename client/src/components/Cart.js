import './Cart.css'
import './Common.css';
import ProductsList from "./ProductsList";
import { CartContext } from '../App';
import { useContext } from 'react'
import axios from 'axios'
import CartHeader from "./CartHeader";
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { shoppingCart, setShoppingCart } = useContext(CartContext);
    const navigate = useNavigate();
    const isCartEmpty = shoppingCart.length === 0;

    let sum = 0;
    for (let index = 0; index < shoppingCart.length; index++) {
        sum += shoppingCart[index].price * shoppingCart[index].amount;
    }

    const onSendCart = () => {
        const cartToSave = shoppingCart.map((product) => {
            return { title: product.title, amount: product.amount }
        });

        axios.post("http://localhost:5001/cart", { products: cartToSave })
            .then(() => {
                setShoppingCart([]);
            })
            .catch((err) => {
                console.log(err);
            });

        navigate('/');
    }

    return (
        <div>
           <CartHeader />
           <ProductsList products={shoppingCart}/>
           <div className="cart-summary">
                <p className="total-price">
                    Total: {sum}
                </p> 
                <button onClick={onSendCart} className="app-button" style={{cursor: isCartEmpty ? 'not-allowed' : 'pointer'}} disabled={isCartEmpty}>
                    Send
                </button>
           </div> 
        </div>
    )
}

export default Cart;