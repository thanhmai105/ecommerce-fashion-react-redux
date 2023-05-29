import React, { useMemo } from 'react'
import Slider from './Slider'
import Products from './Products'
import Loading from './Loading'
import { useSelector } from 'react-redux'

//1. init sate
//2. define action
//3. reducer:  state hiện tại, action
//4. Dispatch để kích hoạt action là hàm

function Home({ addCart }) {
    const { isLoading, errMess, products } = useSelector(state => state.products)

    const productRates = useMemo(() => {
        return products.filter((product) => product.rating.rate >= 4.0)
    }, [products])

    if (isLoading) {
        return <div className="container page-content"><Loading /> </div>
    }
    if (errMess) {
        return <div className="container page-content">Something went wrong!</div>
    }

    return (
        <div>
            <Slider />
            <div className="container page-content">
                <h2 className='text-left'>Highly appreciated products: </h2>
                <div className="row">
                    <ProductRate productRates={productRates} addCart={addCart} />
                </div>
            </div>
        </div>
    )
}

export default Home

const ProductRate = ({ productRates, addCart }) => {
    return (
        <>
            {productRates?.map((item) =>
                <div key={item.id} className="col-lg-3 col-md-4 col-6 p-3">
                    <Products product={item} addCart={addCart} />
                </div>
            )}
        </>
    )
}
