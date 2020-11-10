import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;
    return (
        <div style={{
            border:"1px solid tomato",
            margin: "5px"
        }}>
            <h4>product</h4>
            <p>{product.name}</p>
            <button 
                onClick = {() => addToCart(product.id, product.name)}
            >Add to cart</button>
        </div>
    );
};

export default Product;