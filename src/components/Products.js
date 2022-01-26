import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings';

function Products({ product }) {

    const checkTitleLength = (title) => {
        if (title.length > 20) {
            return title.slice(0, 17) + '...'
        } else {
            return title
        }
    }

    const addCart = () => {
        console.log(product);
    }

    return (
        <div className="product-item" >
            <Link to={`/menu/${product.id}`}>
                <img src={product.image} alt={product.title} />
            </Link>
            <div className="product-content">
                <Link to={`/menu/${product.id}`}>{checkTitleLength(product.title)}</Link><br />
                <span>${product.price}</span>
                <br/>
                <StarRatings
                    rating={product.rating.rate}
                    starDimension="20px"
                    starSpacing="5px"
                    starRatedColor="#fbea54"
                />
            </div>
            <div className="btn-addCart" onClick={addCart}>Add to Cart </div>
        </div>
    )
}

export default Products
