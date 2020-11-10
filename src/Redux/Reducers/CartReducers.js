import { ADD_TO_CART, REMOVE_FORM_CART } from "../Actions/CartAction";

const initialState = {
    cart : [],
    products: [
        {name:'Asus Laptop', id:1},
        {name:'Dell Laptop', id:2},
        {name:'Hp Laptop', id:3},
        {name:'Lenovo Laptop', id:4},
        {name:'Toshiba Laptop', id:5}
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type){

        case ADD_TO_CART :
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length+1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};

        case REMOVE_FORM_CART :
            const remainingId = action.id;
            const remainingCart = state.cart.filter(item=> item.cartId !== remainingId);
            return {...state, cart: remainingCart};

        default :
            return state;
    }
}

export default cartReducers;