import './Cart.css'
import './Common.css';
import ProductsList from "./ProductsList";
import { CartContext } from '../App';
import { useContext, useState } from 'react'
import axios from 'axios'
import CartHeader from "./CartHeader";
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { shoppingCart, setShoppingCart } = useContext(CartContext);
    let [ name, setName ] = useState();
    let [ phone, setPhone ] = useState();
    let [ address, setAddress ] = useState();
    const navigate = useNavigate();
    const isCartEmpty = shoppingCart.length === 0;

    let sum = 0;
    for (let index = 0; index < shoppingCart.length; index++) {
        sum += shoppingCart[index].price * shoppingCart[index].amount;
    }

    const onSendCart = () => {
        // Check if all the order fields were filled
        if (!name || !phone || !address) {
            alert("All form fields are mandatory!");
            return;
        }

        const cartToSave = shoppingCart.map((product) => {
            return { title: product.title, amount: product.amount }
        });

        axios.post("http://localhost:5001/cart", 
            {   name: name,
                phone: parseInt(phone),
                address: address,
                products: cartToSave 
            })
            .then(() => {
                setShoppingCart([]);
                alert("Shopping cart was sent successfully");
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
           {!isCartEmpty &&
           <form className="form">
                <label className="form-label">Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="form-label">Phone number:
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label className="form-label">Address:
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
            </form>}
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