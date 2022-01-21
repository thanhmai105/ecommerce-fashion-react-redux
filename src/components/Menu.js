import React, { useState, useEffect } from 'react'

function RenderProduct({ product, checkTitleLength }) {
    return (
        <div className="product-item" >
            <img src={product.image} alt={product.title} />
            <div className="product-content">
                <a href='/'>{checkTitleLength(product.title)}</a><br />
                <span>${product.price}</span>
            </div>
            <div className="btn-addCart">
                Add to Cart
            </div>
        </div>
    )
}

function Menu() {

    const [products, setProducts] = useState([])
    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => setProducts(products));
    }, [])

    const checkTitleLength = (title) => {
        if (title.length > 35) {
            return title.slice(0, 35) + '...'
        } else if (title.length <= 35) {
            return title
        }
    }

    return (
        <div className="container page-content">
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-lg-3 col-md-4 col-6 p-3">
                        <RenderProduct product={product} checkTitleLength={checkTitleLength}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Menu
