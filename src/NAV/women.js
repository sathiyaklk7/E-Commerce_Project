import React from "react";
import login from '../Imgaes/Home/homepageimg.jpg'
import Appstore from '../Imgaes/men/appstore.png'
import googleplaylogo from '../Imgaes/men/Google-Play-Logo-2022.webp'
import twitterlogo from '../Imgaes/men/twitter.png'
import utubelogo from '../Imgaes/men/utubelogo.jpeg'
import instalogo from '../Imgaes/men/instalogo.jpeg'
import guaranteelogo from '../Imgaes/men/guaranteelogo.jpeg'
import fourteendays from '../Imgaes/men/14days.jpeg'
import Onshophy from '../logo/ShopyVision-300x93-removebg-preview.png'
import fb from '../Imgaes/men/fb.jpeg'
import demoimg from "../Imgaes/car.jpg"
import { Link } from "react-router-dom";
// logo
import Biba from "../Imgaes/women/logo/biba.webp"
// import video
import Female from "./women_video";
// slider
import './womenslider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { NewRelease } from "./Women_Slider.jsx";
import { NewRelease1 } from "./Women_slider2.jsx";
class Women extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const settings = {
            className: "",
            dots: true,
            infinite: true,
            autoplay: true,
            autoplayspeed:1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        };
        const set = {
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 7,
            autoplay:true,
            autoplayspeed:1000,
            slidesToScroll: 3,
            speed: 500
        };

        return (
            <div >
                <div>
                    {/* <Link className="bigimg"><img src={login} /></Link> */}
                    <Female />
                </div>
                <div className="women_main_slider">
                    <Slider {...settings}>
                        {
                            NewRelease.map((p) => (
                                <div>
                                    <div className="women_submain_slider">
                                        <img src={p.img} />
                                    </div>
                                </div>
                            ))
                        }

                    </Slider>
                </div>

                <h2 className="biggest">biggest deals on top brands</h2>
                <div className="menflex">
                    <div className="mencontent1">
                        <Link><img src={demoimg} /></Link>
                        <img src={Biba} />
                        <h4>30-60% Off</h4>
                        <Link><img className="img2men" src={demoimg} /></Link><br />
                        <Link><img style={{ width: "100px", height: '20px' }} src={Onshophy} /></Link>
                        <h4>Up To 50% Off</h4>
                    </div>
                    <div className="mencontent1">
                        <Link><img src={demoimg} /></Link>
                        <p>Levis</p>
                        <h4>Min.40 % Off</h4>
                        <Link><img className="img2men" src={demoimg} /></Link><br />
                        <Link><img style={{ width: "100px", height: '20px' }} src={Onshophy} /></Link>
                        <h4>30-70% Off</h4>
                    </div>
                    <div className="mencontent1">
                        <Link><img src={demoimg} /></Link>
                        <p>TOMMY HILIFIER</p>
                        <h4>30-50% Off</h4>
                        <Link><img className="img2men" src={demoimg} /></Link><br />
                        <Link><img style={{ width: "100px", height: '20px' }} src={Onshophy} /></Link>
                        <h4>Up To 40% Off</h4>
                    </div>
                    <div className="mencontent1">
                        <Link><img src={demoimg} /></Link>
                        <p>UNITED COLORS</p>
                        <h4>40-70% Off</h4>
                        <Link><img className="img2men" src={demoimg} /></Link><br />
                        <Link> <img style={{ width: "100px", height: '20px' }} src={Onshophy} /></Link>
                        <h4>Up To 50% Off</h4>
                    </div>
                </div>
                <div className="slider2_main">
                    <Slider {...set}>
                        {
                            NewRelease1.map((p) => (
                                <div className="slider2_submain">
                                    <img src={p.img} />
                                </div>

                            ))
                        }

                    </Slider>
                </div>
                <h2 className="biggest">catergories to bag</h2>
                <div className="ctb">
                    <div className="ctb1">
                        <Link><img src={demoimg} /></Link>
                        <p style={{ textTransform: 'uppercase' }}> Moss & Melange</p>
                    </div>
                    <div className="ctb1">
                        <Link><img src={demoimg} /></Link>
                        <p style={{ textTransform: 'uppercase' }}>Mod Blocking</p>
                    </div>
                    <div className="ctb1">
                        <Link> <img src={demoimg} /></Link>
                        <p style={{ textTransform: 'uppercase' }}> Red Top & Tees</p>
                    </div>
                    <div className="ctb1">
                        <Link><img src={demoimg} /></Link>
                        <p style={{ textTransform: 'uppercase' }}> Smart Daily Wear Tees</p>
                    </div>
                    <div className="ctb1">
                        <Link><img src={demoimg} /></Link>
                        <p style={{ textTransform: 'uppercase' }}> Eco </p>
                    </div>
                    <div className="ctb1">
                        <Link><img src={demoimg} /></Link>
                        <p style={{ textTransform: 'uppercase' }}> Infant Essentials</p>
                    </div>
                </div>
                <h2 className="biggest">trending in indian wear</h2>
                <div className="indwearmain">
                    <div className="indwear">
                        <Link><img src={demoimg} /></Link>
                        <h4 style={{
                            textTransform: 'capitalize', marginTop: '-5px', wordSpacing: '4px'
                        }}>All White indian wear</h4>
                        <p style={{
                            textTransform: 'capitalize', marginTop: '-5px', letterSpacing: '2px'
                        }}>for an always </p>
                    </div>
                    <div className="indwear">
                        <Link> <img src={demoimg} /></Link>
                        <h4 style={{
                            textTransform: 'capitalize', marginTop: '-5px', wordSpacing: '4px'
                        }}>All White indian wear</h4>
                        <p style={{
                            textTransform: 'capitalize', marginTop: '-5px', letterSpacing: '2px'
                        }}>for an always </p>
                    </div>
                    <div className="indwear">
                        <Link> <img src={demoimg} /></Link>
                        <h4 style={{
                            textTransform: 'capitalize', marginTop: '-5px', wordSpacing: '4px'
                        }}>All White indian wear</h4>
                        <p style={{
                            textTransform: 'capitalize', marginTop: '-5px', letterSpacing: '2px'
                        }}>for an always </p>
                    </div>
                    <div className="indwear">
                        <Link><img src={demoimg} /></Link>
                        <h4 style={{
                            textTransform: 'capitalize', marginTop: '-5px', wordSpacing: '4px'
                        }}>All White indian wear</h4>
                        <p style={{
                            textTransform: 'capitalize', marginTop: '-5px', letterSpacing: '2px'
                        }}>for an always </p>
                    </div>
                    <div className="indwear">
                        <Link> <img src={demoimg} /></Link>
                        <h4 style={{
                            textTransform: 'capitalize', marginTop: '-5px', wordSpacing: '4px'
                        }}>All White indian wear</h4>
                        <p style={{
                            textTransform: 'capitalize', marginTop: '-5px', letterSpacing: '2px'
                        }}>for an always </p>
                    </div>
                </div>
                <div className="footer">
                    <div >
                        <h3>online shopping</h3>
                        <ul>
                            <li style={{
                                marginTop: '20px'
                            }}>men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Home&Living</li>
                            <li>Beauty</li>
                            <li>Gift Cards</li>
                            <li>shoppy insider</li>
                        </ul>
                        <h3>useful links</h3>
                        <ul>
                            <li style={{
                                marginTop: '20px'
                            }}>blog</li>
                            <li>careers</li>
                            <li>site map</li>
                            <li>corporate information</li>
                            <li>whitehat</li>
                            <li>cleartrip</li>
                        </ul>

                    </div>
                    <div>
                        <h3>customer policies</h3>
                        <ul>
                            <li style={{
                                marginTop: '20px'
                            }}>contact us</li>
                            <li>FAQ</li>
                            <li>T&C</li>
                            <li>terms og use</li>
                            <li>track orders</li>
                            <li>shipping</li>
                            <li>cancellation</li>
                            <li>returns</li>
                            <li>privacy policy</li>
                            <li>grievance officer</li>
                        </ul>
                    </div>
                    <div>
                        <h3>experience shoppy app on mobile</h3>
                        <div style={{
                            marginTop: '20px',
                            marginBottom: '30px'
                        }}>
                            <Link><img style={{ width: '150px', height: '30px', borderRadius: '12px' }} src={googleplaylogo} /></Link>
                            <Link><img style={{ width: '150px', height: '30px', borderRadius: '12px', marginLeft: '10px' }} src={Appstore} /></Link>
                        </div>

                        <h3>keep it touch</h3>
                        <div style={{
                            marginTop: '20px',
                            marginBottom: '30px',
                            display: 'flex',
                            gap: '40px'
                        }}>
                            <Link><img style={{ width: '50px', height: '50px', borderRadius: '10px' }} src={fb} /></Link>
                            <Link><img style={{ width: '50px', height: '50px', borderRadius: '10px' }} src={twitterlogo} /></Link>
                            <Link><img style={{ width: '50px', height: '50px', borderRadius: '10px' }} src={utubelogo} /></Link>
                            <Link><img style={{ width: '50px', height: '50px', borderRadius: '10px' }} src={instalogo} /></Link>
                        </div>
                    </div>
                    <div>
                        <Link><img style={{
                            width: '70px', height: '70px', marginTop: '30px', borderRadius: '10px'
                        }} src={guaranteelogo} /></Link>
                        <p><b>100% original</b> guarantee for<br /> all products at shoppy.com</p>
                        <Link><img style={{ width: '70px', height: '70px', borderRadius: '10px', marginTop: '20px' }} src={fourteendays} /></Link>
                        <p><b>Return within 14days</b> of<br />receiving your order</p>
                    </div>
                </div>
                {/* <div>
                    <h3>popular search</h3>
                    <p style={{ textTransform: 'capitalize', wordSpacing: '5px', letterSpacing: '4px',textAlign:'justify',wordBreak:'break-all' }}>sherwani|track
                        pants|blazers|sweaters for men|men wedding dresses|kurta pajama|raincoats|shorts|trousers|waistcoat
                        |inner wear|night wear|jeans|shirts|jogger jeans|men suits|t shirts|sweatshirts|jackets for men
                        |tracksuits|ripped jeans| ethnic wear|hoodies|raksha bandhan gifts|watches|shoes|belts|swimwear|dhotis
                        |boxers|vests|thermals|socks|shurgs|bracelers|rings|sunglasses|headphones|
                        wallets|helmets|caps|mufflers|glovers|ties|cufflinks|men sandals|floaters|flip flops|trunks|bags
                    </p>
                </div> */}
            </div>
        )
    }

}
export default Women