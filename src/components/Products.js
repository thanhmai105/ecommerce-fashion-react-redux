import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings';
import { useDispatch } from 'react-redux';

function Products({ product, addCart }) {
    const dispatch = useDispatch()

    const checkTitleLength = (title) => {
        if (title.length > 20) {
            return title.slice(0, 17) + '...'
        }
        return title
    }

    return (
        <div className="product-item" >
            <Link to={{
                pathname: `/menu/${product.id}`,
                state: product
            }}>
                <img src={product.image} alt={product.title} />
            </Link>
            <div className="product-content">
                <Link to={{ pathname: `/menu/${product.id}`, state: product }}>{checkTitleLength(product.title)}</Link><br />
                <span>${product.price}</span>
                <br />
                <StarRatings
                    rating={product.rating.rate}
                    starDimension="20px"
                    starSpacing="5px"
                    starRatedColor="#fbea54"
                />
            </div>
            <div className="btn-addCart" onClick={() => dispatch(addCart(product))}>Add to Cart </div>
        </div>
    )
}

export default Products
