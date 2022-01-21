import React, { useEffect, useState } from 'react'
// import {baseUrl} from '../redux/baseUrl'
// import Products from './Products';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import { Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs'
import Contact from './Contact'
import Login from './Login'

function Main() {
    return (
        <>
            <Header />
            <Routes >
                <Route path="/" elemeny={<Home />}>
                    <Route path="home" element={<Home />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='about' element={<AboutUs />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='login' element={<Login />} />
                    {/* <Route path='cart' element={<Cart />} />
                    <Route path='like' element={<Like />} /> */}
                </Route>
            </Routes >
            <Footer />
        </>

    )
}

export default Main
