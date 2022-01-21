import React, { useState, useEffect } from "react";

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row m-0 footer-top">
        <div className="col-lg-6 row  footer-left">
          <div className="col-lg-6">
            <h2>ekommart</h2>
            <b>Location</b>
            <p>71 Pilgrim Avenue Chevy Chase,
              MD 20815, USA</p>
            <div className="icon-footer">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
          <div className="col-lg-6">
            <p>Have a question? Give us a call or fill out the contact form. We’d love to hear from you</p>
            <a href="/">Contact Us</a>
          </div>
        </div>
        <div className="col-lg-6 row pr-0 footer-right">
          <div className="col-lg-4">
            <b>ACCOUNT</b>
            <ul>
              <li>
                <a href="/">My Account</a>
              </li>
              <li>
                <a href="/">Order History</a>
              </li>
              <li>
                <a href="/">Wish List</a>
              </li>
              <li>
                <a href="/">Specials</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <b>SERVICES</b>
            <ul >
              <li>
                <a href="/">Discount Returns</a>
              </li>
              <li>
                <a href="/">Policy</a>
              </li>
              <li>
                <a href="/">Customer Service</a>
              </li>
              <li>
                <a href="/">Term & condition</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <b>INFO</b>
            <ul >
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Delivery Information</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-end row m-0">
        <div className="col-md-6 text-left">
          <p>Copyright © 2020 <a href="/">ekommart </a>All Rights Reserved.</p>
        </div>
        <div className="col-md-6 text-right">
          <img src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/payment.png" alt="" className="w-75"/>
        </div>
      </div>
    </div>
  );
}