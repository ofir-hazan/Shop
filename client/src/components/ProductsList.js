import Product from "./Product";

function ProductsList(props) {
    return (
        <div>
            {props.products.map(item=>{
                return (
                  <Product key={item.title} title={item.title} price={item.amonut ? item.price * item.amount : item.price} amount={item?.amount} image={item.image} handleClick={props.handleClick}/>
                )
            })}
        </div>
    )
}

export default ProductsList;