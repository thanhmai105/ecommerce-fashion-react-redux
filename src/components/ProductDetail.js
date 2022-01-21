import React from 'react';

function RenderProductDetail({product}) {
    return (
        <div className='product-detail'>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <img src={product.image} alt={product.title} className='w-100'/>
                </div>
                <div className='col-md-6 col-12'>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <input type={"number"} placeholder='1'/>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

function ProductDetail() {
  return ( 
    <div>
        <RenderProductDetail />
    </div>
  );
}

export default ProductDetail;
