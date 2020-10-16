import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Works.css';

import Slider from "react-slick";

import caro1 from '../../images/carousel-1.png';
import caro2 from '../../images/carousel-2.png';
import caro3 from '../../images/carousel-3.png';
import caro4 from '../../images/carousel-4.png';
import caro5 from '../../images/carousel-5.png';

const Works = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="text-center works">

                    <div className="col-md-12">
                        <h2 className="text-white p-3">Here are some of <span className="spGreen">our works</span></h2>
                    </div>
                    <Slider {...settings}>
                        <div>
                            <img src={caro1} alt="caro1" className="img-responsive caroImg"/>
                        </div>
                        <div>
                            <img src={caro2} alt="caro1" className="img-responsive caroImg"/>
                        </div>
                        <div>
                            <img src={caro3} alt="caro1" className="img-responsive caroImg"/>
                        </div>
                        <div>
                            <img src={caro4} alt="caro1" className="img-responsive caroImg"/>
                        </div>
                        <div>
                            <img src={caro5} alt="caro1" className="img-responsive caroImg"/>
                        </div>

                    </Slider>

                </div>
        </>
    );
};

export default Works;
