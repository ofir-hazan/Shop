const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    image : {
        type: String,
        require: true
    }
})

const Product = mongoose.model('products', productSchema);
module.exports = Product;
