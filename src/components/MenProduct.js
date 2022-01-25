import React from 'react'
import Loading from './Loading'
import Products from './Products';

function MenProduct(props) {

    const filter = (category) => {
        const men = props.products.products.filter((product) => product.category === category)
        return men
    }

    // const men = props.products.products.filter((product) => product.category === "men's clothing")

    const menProduct = filter("men's clothing").map((product) =>
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
                    {menProduct}
                </div>
            </div>
        )
    }
}
export default MenProduct
