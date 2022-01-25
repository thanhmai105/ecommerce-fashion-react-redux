import React from 'react';
import Products from './Products'

function RenderProductDetail({ product }) {
    return (
        <div className='product-detail pt-5 pb-5 text-left'>
            <div className='row'>
                <div className='col-md-6 col-12 left pr-4'>
                    <img src={product.image} alt={product.title} className='w-100' />
                </div>
                <div className='col-md-6 col-12 right pl-4'>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <div className="form-group">
                        <label htmlFor='quanity'>Quanity :</label><br />
                        <input type={"number"} placeholder='1' min='0' id='quanity' />
                    </div>

                    <button>Add to cart</button>
                    <p>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    <p>Rate: {product.rating.rate}</p>
                </div>
            </div>
        </div>
    )
}


function ProductDetail(props) {

    // console.log(props.product);

    if (props.isLoading) {
        return (<div></div>)
    } else if (props.errMess) {
        return (<div></div>)
    } else if (props.product != null && props.products) {
        const men = props.products.filter((product) => product.category === props.product.category && product !== props.product)
        return (
            <div className='container page-content'>
                <RenderProductDetail product={props.product} />
                <h2>Related products</h2>
                <div className="row">
                    {men.map((product) =>
                        <div key={product.id} className="col-lg-3 col-md-4 col-6 p-3">
                            <Products product={product} />
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

export default ProductDetail;
