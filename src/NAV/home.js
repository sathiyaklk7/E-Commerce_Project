import React from "react";
// import Min50off from '../Imgaes/Home/shirt 1.jpg'
// import MIN from '../Imgaes/Home/shirt 1.jpg'

import Appstore from '../Imgaes/men/appstore.png'
import googleplaylogo from '../Imgaes/men/Google-Play-Logo-2022.webp'
import twitterlogo from '../Imgaes/men/twitter.png'
import utubelogo from '../Imgaes/men/utubelogo.jpeg'
import instalogo from '../Imgaes/men/instalogo.jpeg'
import guaranteelogo from '../Imgaes/men/guaranteelogo.jpeg'
import fourteendays from '../Imgaes/men/14days.jpeg'
import fb from '../Imgaes/men/fb.jpeg'
import demoimg from "../Imgaes/car.jpg"
import Home_video from "./home_video"
import Topright from '../Imgaes/Home/shirt 1.jpg'
import Topleft from '../Imgaes/Home/Homepage_images/Workwear Men.jpg'
//import Router
import { Link } from 'react-router-dom'

//  imports images
import Backpacks from '../Imgaes/Home/Homepage_images/Backpacks&Duffels.webp'
import Best_Of_Airdopes from '../Imgaes/Home/Homepage_images/Best Of Airdopes Boat&Good brands.webp'
import Smart from '../Imgaes/Home/Homepage_images/smart_works_wear.webp'
import Premium from '../Imgaes/Home/Homepage_images/premium_carry.jpg'
import headphones from '../Imgaes/Home/Homepage_images/headphones&Speakers.jpg'
import Watches from '../Imgaes/Home/Homepage_images/Watches & Wearables.webp'
import Workwear_Women from '../Imgaes/Home/Homepage_images/Workwear Women.jpg'
import Eyewear from '../Imgaes/Home/Homepage_images/Eyewear.avif'
import Workwear_Men from '../Imgaes/Home/Homepage_images/Workwear Men.jpg'
import Flip_Flops from '../Imgaes/Home/Homepage_images/Flip-Flops.jpg'
import style_Men from '../Imgaes/Home/Homepage_images/Size-Inclusive style-Men.webp'
import style_women from '../Imgaes/Home/Homepage_images/Size-Inclusive style-women.webp'
//import Slide properties
import './homeslider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NewRelease } from "./homeslider.jsx";
import { HomeBigSlider } from "./Home_BigSlider.jsx"
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 1500,
            cssEase: "linear"
        };
        const settings1 = {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            autoplay: true,
            autoplaySpeed: 1500,
            verticalSwiping: true,
            swipeToSlide: true,
            beforeChange: function (currentSlide, nextSlide) {
                console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                console.log("after change", currentSlide);
            }
        };
        return (

            <div>
                <div >
                    <Home_video />
                </div>
                <div className="HomeBigSlider_Main">
                    <Slider {...settings1}>{
                        HomeBigSlider.map((p) => (
                            <div className="HomeBigSlider_Submain">
                                <img src={p.img} />
                            </div>
                        ))

                    }

                    </Slider>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{
                        fontFamily: "fantasy",
                        letterSpacing: "7px"
                        , color: 'blue',
                        fontSize: '40px'
                    }} >CRAZY</h2>
                    <h4 style={{ marginTop: "-8px", marginRight: "12px", color: '#908090' }}>DEALS</h4>
                </div>

                <div className="div1main">

                    <div className="div1">
                        <div>
                            <img className="img1" src={Backpacks} />
                        </div>
                        <h5 style={{ color: '#f76f6f' }}>Backpacks<br />&Duffels</h5>
                        <h3 style={{ textTransform: 'uppercase', fontSize: '15px', marginTop: '7px' }}>starting<mark><del>Rs.2999</del></mark>Rs899</h3>
                        <Link className="Link" to="/Backpacks"><button className="div1btn">View March Offer </button></Link>
                    </div>
                    <div className="div1">
                        <div>
                            <img className="img1" src={Best_Of_Airdopes} />
                        </div>
                        <h5 style={{ color: '#f76f6f' }}>Best Of Airdopes<br />Boat&Good brands</h5>
                        <h3 style={{ textTransform: 'uppercase', fontSize: '15px', marginTop: '7px' }}>starting <mark><del>Rs.2999</del></mark>Rs899</h3>
                        <Link className="Link" to="/Best_of_Airpods"><button className="div1btn">View March Offer </button></Link>
                    </div>
                    <div className="div1">
                        <div>
                            <img className="img1" src={Smart} />
                        </div>
                        <h5 style={{ color: '#f76f6f' }}>Smart<br />Works wear</h5>
                        <h3 style={{ textTransform: 'uppercase', fontSize: '15px', marginTop: '7px' }}>up to 50% off</h3>
                        <Link className="Link" to='Smart_Works_wear'><button className="div1btn">View March Offer </button></Link>
                    </div>
                    <div className="div1">
                        <div>
                            <img className="img1" src={Premium} />
                        </div>
                        <h5 style={{ color: '#f76f6f' }}>Premium<br />Carry</h5>
                        <h3 style={{ textTransform: 'uppercase' }}>min.30% off</h3>
                        <Link className="Link" to='/Premium'><button className="div1btn">View March Offer </button></Link>
                    </div>

                </div>
                <div style={{ textAlign: "center" }}>
                    <h5 style={{ marginTop: '10px', fontSize: '20px', textShadow: '2px 1px 3px  #000' }}>SHOP BY</h5>
                    <h3 style={{
                        marginTop: '-5px', fontFamily: 'sans-serif', color: 'violet', fontSize: '50px', textShadow: '4px 3px 5px  #000'
                    }}>CATEGORY</h3>
                </div>
                <div className="main_slider" >
                    <Slider {...settings}>
                        {
                            NewRelease.map((p) => (
                                <div >
                                    <div className="slider">
                                        <img src={p.img} />
                                        <p > {p.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

                <div className="main_category" >
                    <Link className="Link" to='/headphones'><div className="categorydiv1_2">
                        <img className="img2_2" src={headphones} /><br />
                        <button className="categorybtn_2"><p >headphones&Speakers</p><br /><h3 style={{ marginTop: '-14px' }}>UP TO 70% OFF</h3><br /><p style={{ marginTop: '-14px' }}>Shopn now</p></button>
                    </div></Link>
                    <Link className="Link" to='./Watches'><div className="categorydiv1_2">
                        <img className="img2_2" src={Watches} /><br />
                        <button className="categorybtn_2"><p >Watches & Wearables</p><br /><h3 style={{ marginTop: '-14px' }}>UP TO 80% OFF</h3><br /><p style={{ marginTop: '-14px' }}>Shopn now</p></button>
                    </div></Link>
                    <Link className="Link" to="/Workwear_Women"><div className="categorydiv1_2">
                        <img className="img2_2" src={Workwear_Women} /><br />
                        <button className="categorybtn_2"><p >Workwear Women</p><br /><h3 style={{ marginTop: '-14px' }}>40-70% OFF</h3><br /><p style={{ marginTop: '-14px' }}>Shopn now</p></button>
                    </div></Link>
                    <Link className="Link" to='/Eyewear'><div className="categorydiv1_2">
                        <img className="img2_2" src={Eyewear} /><br />
                        <button className="categorybtn_2"><p >Eyewear</p><br /><h3 style={{ marginTop: '-14px' }}>UP TO 80% OFF</h3><br /><p style={{ marginTop: '-14px' }}>Shopn now</p></button>
                    </div></Link>
                    <Link className="Link" to='Workwear_Men'><div className="categorydiv1_2">
                        <img className="img2_2" src={Workwear_Men} /><br />
                        <button className="categorybtn_2"><p >Workwear Men</p><br /><h3 style={{ marginTop: '-14px' }}>40-80% OFF</h3><br /><p style={{ marginTop: '-14px' }}>Shopn now</p></button>
                    </div></Link>
                    <Link className="Link" to='/Flip_Flops'> <div className="categorydiv1_2">
                        <img className="img2_2" src={Flip_Flops} /><br />
                        <button className="categorybtn_2"><p >Flip_Flops</p><br /><h3 style={{ marginTop: '-14px' }}>30-70% OFF</h3><br /><p style={{ marginTop: '-14px' }}>Shopn now</p></button>
                    </div></Link>
                    <Link className="Link" to='/Style_Men'><div className="categorydiv1_2">
                        <img className="img2_2" src={style_Men} /><br />
                        <button className="categorybtn_2"><p >Size-Inclusive style-Men</p><br /><h3 style={{ marginTop: '-14px' }}>UP TO 60% OFF</h3><br /><p style={{ marginTop: '-14px' }}>Shopn now</p></button>
                    </div></Link>
                    <Link className="Link" to='Style_Women'><div className="categorydiv1_2">
                        <img className="img2_2" src={style_women} /><br />
                        <button className="categorybtn_2"><p >Inclusive style-women</p><br /><h3 style={{ marginTop: '-14px' }}>UP TO 60% OFF</h3><br /><p style={{ marginTop: '-14px' }}>Shopn now</p></button>
                    </div></Link>
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
                            <img style={{ width: '100px', height: '30px', borderRadius: '12px' }} src={googleplaylogo} />
                            <img style={{ width: '100px', height: '30px', borderRadius: '12px', marginLeft: '10px' }} src={Appstore} />
                        </div>

                        <h3>keep it touch</h3>
                        <div style={{
                            marginTop: '20px',
                            marginBottom: '30px',
                            display: 'flex',
                            gap: '40px'
                        }}>
                            <img style={{ width: '50px', height: '50px', borderRadius: '10px' }} src={fb} />
                            <img style={{ width: '50px', height: '50px', borderRadius: '10px' }} src={twitterlogo} />
                            <img style={{ width: '50px', height: '50px', borderRadius: '10px' }} src={utubelogo} />
                            <img style={{ width: '50px', height: '50px', borderRadius: '10px' }} src={instalogo} />
                        </div>
                    </div>
                    <div>
                        <img style={{
                            width: '70px', height: '70px', marginTop: '30px', borderRadius: '10px'
                        }} src={guaranteelogo} />
                        <p><b>100% original</b> guarantee for<br /> all products at shoppy.com</p>
                        <img style={{ width: '70px', height: '70px', borderRadius: '10px', marginTop: '20px' }} src={fourteendays} />
                        <p><b>Return within 14days</b> of<br />receiving your order</p>
                    </div>
                </div>
                {/* <div>
                    <h3>popular search</h3>
                    <p style={{ textTransform: 'capitalize',maxWidth:'100%', wordSpacing: '5px', textAlign: "justify", letterSpacing: '4px' }}>sherwani|track
                        pants|blazers|sweaters for men|men wedding dresses|kurta pajama|raincoats|shorts|trousers|waistcoat
                        |inner wear|night wear|jeans|shirts|jogger jeans|men suits|t shirts|sweatshirts|jackets for men
                        |tracksuits|ripped jeans| ethnic wear|hoodies|rakshabandhangifts|watches|shoes|belts|swimwear|dhotis|boxers|vests|thermals|socks|shurgs|bracelers|rings|sunglasses|headphones|
                        wallets|helmets|caps|mufflers|glovers|ties|cufflinks|men sandals|floaters|flip flops|trunks|bags
                    </p>
                </div> */}

            </div>
        )
    }
}
export default Home