import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Products from './Products';

function MenProduct(props) {
    const [rate, setRate] = useState("select rating")
    const [price, setPrice] = useState("all")

    const [products, setProducts] = useState(() => {
        const menProduct = props.products.products.filter(product => product.category === "men's clothing")
        return menProduct
    })

    const handleFilterChange = (e, filterType) => {
        switch (filterType) {
            case 'rate':
                setRate(e.target.value)
                break;
            case 'price':
                setPrice(e.target.value)
                break;
            default: break;
        }
    }

    useEffect(() => {
        let filteredProducts = props.products.products.filter(product => product.category === "men's clothing")
        if (rate !== 'select rating') {
            filteredProducts = filteredProducts.filter(product => product.rating.rate >= rate)
        }

        if (price !== 'all') {
            if (price === "lowest") {
                filteredProducts = filteredProducts.sort((el1, el2) => el1.price.toString().localeCompare(el2.price, undefined, { numeric: true }));
            }

            if (price === "highest") {
                filteredProducts = filteredProducts.sort((el1, el2) => el2.price.toString().localeCompare(el1.price, undefined, { numeric: true }));
            }
        }

        setProducts(filteredProducts)
    }, [rate, price, props.products.products])


    //render
    if (props.products.isLoading) {
        return (<div className="container page-content"><Loading /> </div>)
    } else if (props.products.errMess) {
        return (<div className="container page-content">error</div>)
    } else {
        return (
            <div className="container page-content">
                <div className='d-flex justify-content-between filter'>
                    <div>
                        <label>Rating: </label>
                        <select onChange={(e) => handleFilterChange(e, "rate")}>
                            <option value={"select rating"}>Select rating</option>
                            <option value="1">From 1.0</option>
                            <option value="2">From 2.0</option>
                            <option value="3">From 3.0</option>
                            <option value="4">From 4.0</option>
                        </select>
                    </div>

                    <div>
                        <label>Sort Price: </label>
                        <select onChange={(e) => handleFilterChange(e, "price")}>
                            <option value="all">All</option>
                            <option value="lowest">Low to hight</option>
                            <option value="highest">Hight to low</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    {products.map((product) =>
                        <div key={product.id} className="col-lg-3 col-md-4 col-6 p-3">
                            <Products product={product} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default MenProduct
