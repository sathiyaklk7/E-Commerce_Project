import React from "react";
import './slider'
import './slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NewRelease } from "./slider.jsx";
function slider() {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 7,
    //     slidesToScroll: 7,
    //   };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div>
            <div>
                <Slider {...settings}>
                {
                NewRelease.map((p) => (
                    
                    <div className="demoslider">
                        <img  src={p.img} />
                        
                        </div>
                ))
            }
            </Slider>
            </div>
        </div>
    )
}
export default slider