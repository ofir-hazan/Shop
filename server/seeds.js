const { default: mongoose } = require("mongoose");

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/store', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log(err);
    })

const products = [
    { 
        title: 'marshmallows', 
        price: 8, 
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/09/marshmallows-white-bowl-wood-board-white-surfafce.jpg.rend.hgtvcom.476.357.suffix/1631222827221.jpeg'
    },
    { 
        title: 'chocolate', 
        price: 10, 
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chocolate_%28blue_background%29.jpg/300px-Chocolate_%28blue_background%29.jpg',
    },
    { 
        title: 'cake', 
        price: 20, 
        image: 'https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg',
    },
    { 
        title: 'candy', 
        price: 15, 
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1-81olored-candies-on-pastel-pink-background-royalty-free-image-1644956455.jpg'
    },
    { 
        title: 'lollipop', 
        price: 5, 
        image: 'https://m.media-amazon.com/images/I/51LN-9VtkxL.jpg',
    }
]

Product.insertMany(products)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
