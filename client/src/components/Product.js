import './Product.css'

function Product(props) { 
    return (
        <div className='allCard' onClick={() => props.handleClick({
            title: props.title, 
            price: props.price, 
            image: props.image
        })}>
            <div className='texts'>
                <p className='title'>{props.title}</p>
                {props.amount && <p>amount: {props.amount}</p>}
                <p className='price'> price: {props.amount ? props.price * props.amount : props.price}</p>
            </div>
            <img src={props.image} className='img'></img>
        </div>
    );
}

export default Product;