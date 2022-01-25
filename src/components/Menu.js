import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Products from './Products';

function Menu(props) {

    console.log(props.products.products);
    const menu = props.products.products.map((product) =>
        <div key={product.id} className="col-lg-3 col-md-4 col-6 p-3">
            <Products product={product} />
        </div>
    )

    if (props.products.isLoading) {
        return (<div className="container page-content"><Loading /> </div>)
    } else if (props.products.errMess) {
        return (<div className="container page-content">error</div>)
    } else {
        return (
            <div className="container page-content">
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }
}
export default Menu
