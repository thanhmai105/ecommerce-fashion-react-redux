import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import ProductDetail from './ProductDetail'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import AboutUs from './AboutUs'
import Contact from './Contact'
import Login from './Login'

import { fetchProducts, addCart, signUp } from '../redux/ActionCreator';
import { connect, useDispatch } from 'react-redux';
import MenProduct from './MenProduct'
import Cart from './Cart'


const mapStateToProps = state => {
    return {
        products: state.products,
        numberCart: state.carts.numberCart,
        carts: state.carts,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addCart: product => dispatch(addCart(product)),
        signUp: (user) => dispatch(signUp(user))
    }
};

function Main() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={props => <Home addCart={addCart} {...props} />} />
                <Route exact path='/menu' component={props => <Menu addCart={addCart} {...props} />} />
                <Route path='/menu/:productId' component={ProductDetail} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/about' component={AboutUs} />
                <Route exact path='/cart' component={Cart} />
                <Route exact path='/login' component={Login} />
                <Route exact path="/:category" component={props => <MenProduct addCart={addCart} {...props} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

