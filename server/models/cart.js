const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
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
