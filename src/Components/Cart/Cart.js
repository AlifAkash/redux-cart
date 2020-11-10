import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/CartAction';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div style={{
            border:"1px solid tomato",
            margin: "5px"
        }}>
            <h2>Cart</h2>
            <ul>
                {
                    cart.map(pd=> <li key={pd.cartId}>{pd.name} <button onClick={() => removeFromCart(pd.cartId)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart : removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);