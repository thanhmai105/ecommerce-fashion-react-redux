import React from 'react';

function Slider() {
    return (
        <div className="slider page-content" >
            <div id="carouselExampleCaptions" className=" slide" data-pause="hover">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" ></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1" ></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {/* <div className="carousel-item active">
                        <img src="https://demo.xtemos.com/basel/wp-content/uploads/2015/08/main-big-baner-12.jpg" className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-content-slider1">
                            <div>
                                <h1 className='content-line1'>Man Bags</h1>
                                <h1 className='content-back'>2023</h1>
                            </div>
                            <h1 className='content-line2'>New Men's Collection</h1>
                        </div>
                        <div className="carousel-bag-animation">
                            <img src="https://demo.xtemos.com/basel/wp-content/uploads/2015/08/bag-on-slider-demo.png" alt="..." style={{ maxWidth: "100%", transform: "rotate(10deg)" }} />
                        </div>
                    </div> */}
                    <div className="carousel-item active">
                        <img src="https://demo.xtemos.com/basel/wp-content/uploads/2015/08/main-big-baner-2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-content-slider2">
                            <div>
                                <h1 className='content-line1'>New Style</h1>
                                <h1 className='content-back'>2023</h1>
                            </div>
                            <h1 className='content-line2'>Boot's Collection For Men</h1>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>
        </div>);
}

export default Slider;
