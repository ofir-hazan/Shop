const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    products: {
        type:   [
                    {
                        title: String, 
                        amount: Number
                    }
                ],
        require: true
    }
})

const Cart = mongoose.model('carts', cartSchema);
module.exports = Cart;
