import * as ActionTypes from './ActionTypes';

export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true));

    return fetch('https://fakestoreapi.com/products')
        .then(response => {
                if(response.ok){
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


//dispatch ,api ,
