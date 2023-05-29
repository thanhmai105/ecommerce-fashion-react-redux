import React, { useMemo } from 'react';
import Products from './Products'
import { useSelector } from 'react-redux'
import Loading from './Loading';
import { useLocation } from 'react-router-dom'

function ProductDetail() {
    const { state: product } = useLocation()
    const { isLoading, errMess, products } = useSelector(state => state.products)

    const men = useMemo(() => {
        return products.filter((item) => item?.category === product?.category && item.id !== product.id)
    }, [product, products])

    if (isLoading) {
        return (<div className='container page-content'><Loading /></div>)
    }

    if (errMess) {
        return <div className='container page-content'>{errMess}</div>
    }

    return (
        <div className='container page-content'>
            <RenderProductDetail product={product} />
            <h2>Related products</h2>
            <div className="row">
                {men.map((item) =>
                    <div key={item.id} className="col-lg-3 col-md-4 col-6 p-3">
                        <Products product={item} />
                    </div>
                )}
            </div>
        </div>
    );
}

function RenderProductDetail({ product }) {
    return (
        <div className='product-detail pt-5 pb-5 text-left'>
            <div className='row'>
                <div className='col-md-6 col-12 left pr-4'>
                    <img src={product?.image} alt={product?.title} className='w-100' />
                </div>
                <div className='col-md-6 col-12 right pl-4'>
                    <h3>{product?.title}</h3>
                    <p>${product?.price}</p>
                    <p>{product?.description}</p>
                    <div className="form-group">
                        <label htmlFor='quanity'>Quanity :</label><br />
                        <input type={"number"} placeholder='1' min='0' id='quanity' />
                    </div>

                    <button>Add to cart</button>
                    <p>Category: {product?.category?.charAt(0).toUpperCase() + product?.category?.slice(1)}</p>
                    <p>Rate: {product?.rating?.rate}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
