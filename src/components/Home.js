import React from 'react'
import Slider from './Slider'
import Products from './Products'
import Loading from './Loading'

//1. init sate
//2. define action
//3. reducer:  state hiện tại, action
//4. Dispatch để kích hoạt action là hàm

function Home(props) {

    const productRates = props.products.products.filter((product) => product.rating.rate >= 4.0)
    const ProductRate = productRates.map((product) =>
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
            <div>
                <Slider />
                <div className="container page-content">
                    <h2 className='text-left'>Highly appreciated products: </h2>
                    <div className="row">
                        {ProductRate}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
