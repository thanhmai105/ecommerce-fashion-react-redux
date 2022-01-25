import React from 'react'
import { Link } from 'react-router-dom'

function Products({ product }) {

    const checkTitleLength = (title) => {
        if (title.length > 35) {
            return title.slice(0, 35) + '...'
        } else {
            return title
        }
    }

    // const addCart = () => {

    // }

    return (
        <div className="product-item" >
            <Link to={`/menu/${product.id}`}>
                <img src={product.image} alt={product.title} />
            </Link>
            <div className="product-content">
                <Link to={`/menu/${product.id}`}>{checkTitleLength(product.title)}</Link><br />
                <span>${product.price}</span>
            </div>
            <div className="btn-addCart" >Add to Cart </div>
        </div>
    )
}

export default Products
