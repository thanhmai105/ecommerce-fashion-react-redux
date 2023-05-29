import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Products } from './products';
import { Carts } from './carts'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { User } from './users';
// import { createForms } from 'react-redux-form';
// import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            carts: Carts,
            user: User,
        }),
        applyMiddleware(thunk)
    );

    return store;
}

//create store

// middleware