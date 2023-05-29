import * as ActionTypes from './ActionTypes';
import axios from 'axios'

export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true));

    return fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(products => dispatch(addProducts(products)))
        .catch(error => dispatch(productsFailed(error.message)));
};

//register
const API_URL = "https://644208e133997d3ef9070789.mockapi.io/fashion/v1"
export const signUp = (body) => async (dispatch) => {
    const response = await axios.post(`${API_URL}/users`, body)
        .catch(error => dispatch(registerFailed(error?.message)))
    dispatch(registerUser(body))
    return response
}

export const getUser = () => async (dispatch) => {
    const response = await axios.get(`${API_URL}/users`,)
    dispatch(signIn(response.data))
    return response
}

//register
export const registerUser = (user) => ({
    type: ActionTypes.REGISTER,
    payload: user
})

export const registerFailed = (error) => ({
    type: ActionTypes.REGISTER_FAILED,
    payload: error
})

//sign in
export const signIn = (listUser) => ({
    type: ActionTypes.GET_USER,
    payload: listUser
})


//function to define action for dispatch

export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING,
});

export const productsFailed = (errmess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errmess
});
export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});

//add cart

export const getNumberCart = () => ({
    type: ActionTypes.GET_NUMBER_CART
})

export const addCart = (payload) => ({
    type: ActionTypes.ADD_CARTS,
    payload
})

export const deleteCart = (payload) => ({
    type: ActionTypes.DELETE_CART,
    payload
})

//dispatch ,api ,
