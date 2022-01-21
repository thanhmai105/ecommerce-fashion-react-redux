import React from 'react';

function AboutUs() {
  return (
    <div className='page-content container-fluid aboutus'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://cdn.shopify.com/s/files/1/0551/8001/files/banner-22_570x500_crop_center.jpg?v=1618896876" alt="" className='w-100' />
          </div>
          <div className="col-md-6 text-left">
            <h2>About Us</h2>
            <h4>General information</h4>
            <p>Our company is dedicated to creating unique and comfortable clothing for men and women. Since our establishment in 2010, Fashion's activity has extended from developing designer clothes to training new designers and stylists at our school, participation of our trainees at the world's leading fashion shows and writing articles about fashion.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 text-left">
            <h2>Our Story</h2>
            <h4>For years we have been studying the fashion trends and today we can say with certainty – we know everything about fashion.</h4>
            <p>Vendy Store is an online fashion clothing store offering affordable clothing to women and men since 2010, fashion style for less to impress - it's online clothing shopping not to be missed.<br />
              So, with the great pleasure, we are offering you our goods, and we are sure that only our choices of garments will suit you best. Our product is universal because it suits different customers with different demands. We assure you it is really important, it shows that our good has such capacity as flexibility.
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://cdn.shopify.com/s/files/1/0551/8001/files/banner-23_570x600_crop_center.jpg?v=1618897665" alt="" className='w-100 pt-5' />
          </div>
        </div>
      </div>
      <div className='row message'>
        <h4>Testimonials</h4>
        <div className='justify-content-center d-flex pt-5 pb-5'>
          <p>"Hi, my order arrived yesterday. I love it! Thank you! What a fast service...you guys are great! I wish every site was like this one."</p>
        </div>
        
        <div className='d-flex text-left align-items-center'>
          <img src="https://cdn.shopify.com/s/files/1/0551/8001/files/author-1_70x70_crop_center.jpg?v=1618318165" alt="" />
          <div>
            <h5><b>Jessica</b></h5>
            <span className='text-muted'>Founder ekommart</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;
