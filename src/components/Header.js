import React, { useEffect, useState } from 'react'
import cart from '../image/shopping-cart.png'
import { Link } from 'react-router-dom'

function Header(props) {

    const categories = props.products.products.map((product) => {
        return product.category
    })
    const categoriesRemain = [...new Set(categories)]

    const [search, setSearch] = useState('')
    console.log(search);
    // const handleSearch = (e) => {
    //   setSearch(e.target.value)
    // }

    return (
        <div className='Header border-bottom'>
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/home">ekommart</Link>
                    <Link className="nav-link cart-mobile" to="/cart">
                        <img id="shopping-cart" src={cart} alt="shopping-cart" />
                        <span id="cart-number">0</span>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto nav-menu">
                            <li className="nav-item home">
                                <Link className="nav-link text-left" to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item menu">
                                <Link className="nav-link menu-desktop text-left" to="/menu">Menu
                                    <i className="fas fa-chevron-down"></i>
                                </Link>

                                <button className="dropdown-toggle menu-mobile" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                    Menu
                                    <i className="fas fa-chevron-down"></i>
                                </button>

                                <div className="dropdown-menu drop-menu" aria-labelledby="dropdownMenuLink">
                                    {categoriesRemain.map((category) => (
                                        <Link key={category} className="dropdown-item desktop" 
                                            to={`/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}
                                        </Link>
                                    ))}
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-left" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-left" to="/contact">Contact</Link>
                            </li>
                        </ul>

                        <form className="form-inline desktop">
                            <input 
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="form-control mr-sm-2 border-0 search" 
                                type="search" placeholder='Search...' aria-label="Search" 
                            />
                            <button 
                                className="btn p-2 border-0" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>

                        <div className='nav-icon'>
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        <i className="far fa-user"></i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/like">
                                        <i className="far fa-heart"></i>
                                    </Link>
                                </li>
                                <li className="nav-item cart-desktop">
                                    <Link className="nav-link" to="/cart">
                                        <img id="shopping-cart" src={cart} alt="shopping-cart" />
                                        <span id="cart-number">0</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className='container-fluid pt-2 pb-2 mobile'>
                    <form className="form-inline  mr-0">
                        <input className="form-control border-0 search search-mobile" type="search" placeholder='Search...' aria-label="Search" />
                        <button className="btn p-2 border-0" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header
