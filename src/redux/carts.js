import * as ActionTypes from './ActionTypes';

const initialState = {
    numberCart: 0,
    cartData: [],
    products: []
}

export const Carts = (state = initialState,  action) => {
    switch(action.type) {
        case ActionTypes.GET_NUMBER_CART:
                return{
                    ...state
                }

        case ActionTypes.ADD_CARTS:
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    qunity: 1,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price
                }
                state.cartData.push(cart)
            }
            else{
                let check = false;
                state.cartData.map((item,key) => {
                    if(item.id === action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    } 
                    return check
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        image:action.payload.image,
                        price:action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }

        default:
            return state
    }
}