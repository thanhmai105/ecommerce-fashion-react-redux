import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import Loading from './Loading'
import Products from './Products';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function MenProduct({ addCart }) {
    const { isLoading, errMess, products: listProduct } = useSelector(state => state.products)
    const { state: category } = useLocation()

    const [rate, setRate] = useState("select rating")
    const [price, setPrice] = useState("all")

    const productCategory = useMemo(() => {
        return listProduct.filter(product => product.category === category)
    }, [category, listProduct])

    const [products, setProducts] = useState(productCategory)
    const refRate = useRef(0)
    const refPrice = useRef("")

    const handleFilterChange = useCallback((filterType) => () => {
        switch (filterType) {
            case 'rate':
                setRate(refRate.current.value)
                break;
            case 'price':
                setPrice(refPrice.current.value)
                break;
            default: break;
        }
    }, [])

    useEffect(() => {
        let filteredProducts = productCategory
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
    }, [rate, price, productCategory])

    //render
    if (isLoading || products?.length === 0) {
        return (<div className="container page-content"><Loading /> </div>)
    }
    if (errMess) {
        return (<div className="container page-content">error</div>)
    }
    return (
        <div className="container page-content">
            <div className='d-flex justify-content-between filter'>
                <div>
                    <label>Rating: </label>
                    <select onChange={handleFilterChange("rate")} ref={refRate}>
                        <option value={"select rating"}>Select rating</option>
                        <option value="1">From 1.0</option>
                        <option value="2">From 2.0</option>
                        <option value="3">From 3.0</option>
                        <option value="4">From 4.0</option>
                    </select>
                </div>

                <div>
                    <label>Sort Price: </label>
                    <select onChange={handleFilterChange("price")} ref={refPrice}>
                        <option value="all">All</option>
                        <option value="lowest">Low to hight</option>
                        <option value="highest">Hight to low</option>
                    </select>
                </div>
            </div>

            <div className="row">
                {products.map((product) =>
                    <div key={product.id} className="col-lg-3 col-md-4 col-6 p-3">
                        <Products product={product} addCart={addCart} />
                    </div>
                )}
            </div>
        </div>
    )

}
export default MenProduct
