import React, { Component } from 'react'
// import {baseUrl} from '../redux/baseUrl'
// import Products from './Products';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import ProductDetail from './ProductDetail'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import AboutUs from './AboutUs'
import Contact from './Contact'
import Login from './Login'

import { fetchProducts, addCart } from '../redux/ActionCreator'
// import { actions } from 'react-redux-form';
import { connect } from 'react-redux';
import MenProduct from './MenProduct'
import Cart from './Cart'


const mapStateToProps = state => {
    return {
        products: state.products,
    }
}



const mapDispatchToProps = dispatch => ({
    fetchProducts: () => { dispatch(fetchProducts()) }
});

class Main extends Component {

    constructor(props) {
        super();
        //state search
    }

    

    // handleSearch = (search) => {
    //     console.log(search);
    //     // let sourceArray = this.props.products;
    //     // let newArray = [];
    //     // if (search.length <= 0) {
    //     //     newArray = sourceArray;
    //     // } else {
    //     //     search.toLowerCase();
    //     //     for (let item of sourceArray) {
    //     //         if (item.name.toLowerCase().indexOf(search) > -1) {
    //     //             newArray.push(item);
    //     //         }
    //     //     }
    //     // }
    //     // this.setState({
    //     //     items: newArray,
    //     //     valueSearch: search
    //     // });
    // }

    componentDidMount() {
        this.props.fetchProducts();
    }


    render() {

        const ProductWithId = ({ match }) => {
            return (
                <ProductDetail
                    product={this.props.products.products.filter((product) => product.id === parseInt(match.params.productId, 10))[0]}
                    isLoading={this.props.products.isLoading}
                    errMess={this.props.products.errMess}
                    products={this.props.products.products}
                />
            );
        }


        const CartWithId = ({ match }) => {
            return (
                <Cart
                    product={this.props.products.products.filter((product) => product.id === parseInt(match.params.productId, 10))[0]}
                    isLoading={this.props.products.isLoading}
                    errMess={this.props.products.errMess}
                />
            );
        }

        return (
            <div>
                <Header
                    products={this.props.products}
                    // valueSearch={this.state.valueSearch}
                    // handleSearch={this.handleSearch}
                />
                <Switch>
                    <Route path='/home' component={() => <Home products={this.props.products} />} />
                    <Route exact path='/login' component={(props) => <Login {...props} />} />
                    <Route exact path='/contact' component={(props) => <Contact {...props} />} />
                    <Route exact path='/about' component={(props) => <AboutUs {...props} />} />
                    <Route exact path='/menu' component={() => <Menu products={this.props.products} />} />
                    <Route exact path='/cart' component={CartWithId} />

                    <Route exact path="/men's clothing" component={() => <MenProduct products={this.props.products} />} />

                    <Route path='/menu/:productId' component={ProductWithId} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

