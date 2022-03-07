import * as ActionTypes from './ActionTypes';

const initialState = {
    numberCart: 0,
    cartData: []
}

export const Carts = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_NUMBER_CART:
            return {
                ...state
            }

        case ActionTypes.ADD_CARTS:
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    title: action.payload.title,
                    image: action.payload.image,
                    price: action.payload.price
                }
                state.cartData.push(cart)
            }
            else {
                let check = false;
                state.cartData.map((item, key) => {
                    if (item.id === action.payload.id) {
                        state.cartData[key].quantity++;
                        check = true;
                    }
                    return check
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        title: action.payload.title,
                        image: action.payload.image,
                        price: action.payload.price
                    }
                    state.cartData.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }

        case ActionTypes.DELETE_CART:
            let quantity_ = state.cartData[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                cartData: state.cartData.filter(item => {
                    return item.id !== state.cartData[action.payload].id
                })
            }

        default:
            return state
    }
}