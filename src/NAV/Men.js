import React from "react";
// import login from '../Imgaes/Home/homepageimg.jpg'
import Appstore from '../Imgaes/men/appstore.png'
import googleplaylogo from '../Imgaes/men/Google-Play-Logo-2022.webp'
import twitterlogo from '../Imgaes/men/twitter.png'
import utubelogo from '../Imgaes/men/utubelogo.jpeg'
import instalogo from '../Imgaes/men/instalogo.jpeg'
import guaranteelogo from '../Imgaes/men/guaranteelogo.jpeg'
import fourteendays from '../Imgaes/men/14days.jpeg'
// import Onshophy from '../logo/ShopyVision-300x93-removebg-preview.png'
import fb from '../Imgaes/men/fb.jpeg'
// import demoimg from "../Imgaes/car.jpg"
import { Link } from "react-router-dom";
import Menvideo from './men_video'
// import logo
import Nike from '../Imgaes/men/logo/Nike1-removebg-preview.png'
import Puma from '../Imgaes/men/logo/puma-removebg-preview.png'
import Sketchers from '../Imgaes/men/logo/Skechers-removebg-preview.png'
import Crocs from '../Imgaes/men/logo/crocs-removebg-preview.png'
//import images
import Polo from '../Imgaes/men/content_img/UNITED COLORS.avif'
import Nike1 from '../Imgaes/men/content_img/nike.jpg'
import Levis from '../Imgaes/men/content_img/levis.jpg'
import Puma1 from '../Imgaes/men/content_img/puma.avif'
import Tommy from '../Imgaes/men/content_img/tommy.jpg'
import Sketchers1 from '../Imgaes/men/content_img/sketchers.jpg'
import UnitedColor from '../Imgaes/men/content_img/UNITED COLORS.avif'
import Crocs1 from '../Imgaes/men/content_img/crocs.webp'
import Shirts from '../Imgaes/men/content_img/shirt.jpg'
import T_Shirts from '../Imgaes/men/content_img/T-Shirt.webp'
import Jeans from '../Imgaes/men/content_img/jeans.avif'
import Shorts_Trousers from '../Imgaes/men/content_img/shorts&trousers.jpg'
import Casual_Shoes from '../Imgaes/men/content_img/casual_shoes.jpg'
import Infant_Essentials from '../Imgaes/men/content_img/infant_essential.webp'
import Indian_wear from '../Imgaes/men/content_img/All_indian_white_wear.jpg'
import Ethinic_Casuals from '../Imgaes/men/content_img/Ethinic_Casual.jpg'
import Printed_kurta from '../Imgaes/men/content_img/Printed_kurta.avif'
import Everyday_Kurtas from '../Imgaes/men/content_img/Everyday_kurta.jpg'
import Handpicked_Trendy from '../Imgaes/men/content_img/Handpicked.jpg'
// import slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Newmen } from "./Men_slider1.jsx";
class Men extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const set = {
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 6,
            autoplay: true,
            autoplayspeed:1000,
            slidesToScroll: 3,
            speed: 500,
        };
        return (
            <div >
                <div>
                    {/* <Link className="bigimg"><img src={login} /></Link> */}
                    <Menvideo />
                </div>
                <h2 className="biggest">biggest deals on top brands</h2>
                <div className="menflex">
                    <div className="mencontent1">
                        <Link className="Link" to='/Polo'><img src={Polo} />
                            <p>U.S POLO ASSN</p>
                            <h4>30-60% Off</h4></Link>
                        <Link className="Link" to='/Nike'><img className="img2men" src={Nike1} /><br />
                            <img style={{ width: "100px", height: '20px' }} src={Nike} />
                            <h4>Up To 50% Off</h4></Link>
                    </div>
                    <div className="mencontent1">
                        <Link className="Link" to='/Levis' ><img src={Levis} />
                            <p>Levis</p>
                            <h4>Min.40 % Off</h4></Link>
                        <Link className="Link" to='/Puma' ><img className="img2men" src={Puma1} /><br />
                            <img style={{ width: "100px", height: '30px' }} src={Puma} />
                            <h4>30-70% Off</h4></Link>
                    </div>
                    <div className="mencontent1">
                        <Link className="Link" to='/Tommy' ><img src={Tommy} />
                            <p>TOMMY HILIFIER</p>
                            <h4>30-50% Off</h4></Link>
                        <Link className="Link" to='/Sketchers' ><img className="img2men" src={Sketchers1} /><br />
                            <img style={{ width: "100px", height: '30px' }} src={Sketchers} />
                            <h4>Up To 40% Off</h4></Link>
                    </div>
                    <div className="mencontent1">
                        <Link className="Link" to='/UnitedColor'><img src={UnitedColor} />
                            <p>UNITED COLORS</p>
                            <h4>40-70% Off</h4></Link>
                        <Link className="Link" to='./Crocs'><img className="img2men" src={Crocs1} /><br />
                            <img style={{ width: "150px", height: '25px', backgroundColor: '#f5dcdc5a' }} src={Crocs} />
                            <h4>Up To 50% Off</h4></Link>
                    </div>
                </div>
                <h2 className="biggest">catergories to bag</h2>
                <div className="ctb">
                    <div className="ctb1">
                        <Link className="Link" to='/shirt1'><img src={Shirts} />
                            <p style={{ textTransform: 'uppercase' }}> shirts</p></Link>
                    </div>
                    <div className="ctb1">
                        <Link className="Link" to="/T_Shirt1" ><img src={T_Shirts} />
                            <p style={{ textTransform: 'uppercase' }}>T-shirts</p></Link>
                    </div>
                    <div className="ctb1">
                        <Link className="Link" to="/Jeans"> <img src={Jeans} />
                            <p style={{ textTransform: 'uppercase' }}> Jeans</p></Link>
                    </div>
                    <div className="ctb1">
                        <Link className="Link" to="/Shorts_Trousers"><img src={Shorts_Trousers} />
                            <p style={{ textTransform: 'uppercase' }}> Shorts & Trousers</p></Link>
                    </div>
                    <div className="ctb1">
                        <Link className="Link" to="/Casual_Shoes"><img src={Casual_Shoes} />
                            <p style={{ textTransform: 'uppercase' }}> Casual Shoes</p></Link>
                    </div>
                    <div className="ctb1">
                        <Link className="Link" to="/Infant_Essentials"><img src={Infant_Essentials} />
                            <p style={{ textTransform: 'uppercase' }}> Infant Essentials</p></Link>
                    </div>
                </div>
                <div className="men_slider1_main">
                    <Slider {...set}>
                        {
                            Newmen.map((p) => (
                                <div className="ctb">
                                    <div className="ctb1">
                                        <img src={p.img} />
                                        <p style={{ textTransform: 'uppercase' }}>{p.name}</p>
                                    </div>
                                </div>
                            ))

                        }
                    </Slider>
                </div>

                <h2 className="biggest">trending in indian wear</h2>
                <div className="indwearmain">
                    <div className="indwear">
                        <Link className="Link" to='/Indian_wear'><img src={Indian_wear} />
                            <h4 style={{
                                textTransform: 'capitalize', marginTop: '-5px', wordSpacing: '4px'
                            }}>All White indian wear</h4>
                            <p style={{
                                fontSize: '10px', textTransform: 'capitalize', marginTop: '0px', letterSpacing: '2px'
                            }}>for an always cool outlook</p></Link>
                    </div>
                    <div className="indwear">
                        <Link className="Link" to='/Ethinic_Casuals'> <img src={Ethinic_Casuals} />
                            <h4 style={{
                                textTransform: 'capitalize', marginTop: '-5px', wordSpacing: '4px'
                            }}>Ethinic Casuals</h4>
                            <p style={{
                                fontSize: '10px', textTransform: 'capitalize', marginTop: '0px', letterSpacing: '2px'
                            }}>Indian surely know the route to comfort</p></Link>
                    </div>
                    <div className="indwear">
                        <Link className="Link" to='/Printed_kurta'> <img src={Printed_kurta} />
                            <h4 style={{
                                textTransform: 'capitalize', marginTop: '-5px', wordSpacing: '4px'
                            }}>Printed kurta Sets</h4>
                            <p style={{
                                fontSize: '10px', textTransform: 'capitalize', marginTop: '0px', letterSpacing: '2px'
                            }}>Festive wear that your family will love</p></Link>
                    </div>
                    <div className="indwear">
                        <Link className="Link" to='/Everyday_Kurtas'><img src={Everyday_Kurtas} />
                            <h4 style={{
                                textTransform: 'capitalize', marginTop: '-5px', wordSpacing: '4px'
                            }}>Everyday Kurtas</h4>
                            <p style={{
                                fontSize: '10px', textTransform: 'capitalize', marginTop: '0px', letterSpacing: '2px'
                            }}>When Style Meet Comfort</p></Link>
                    </div>
                    <div className="indwear">
                        <Link className="Link" to='/Handpicked_Trendy'> <img src={Handpicked_Trendy} />
                            <h4 style={{
                                textTransform: 'capitalize', marginTop: '-5px', wordSpacing: '4px'
                            }}>Handpicked Trendy Styles</h4>
                            <p style={{
                                fontSize: '10px', textTransform: 'capitalize', marginTop: '-2px', letterSpacing: '2px'
                            }}>Update the language of Comfort </p></Link>
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
                            <Link><img style={{ width: '100px', height: '30px', borderRadius: '12px' }} src={googleplaylogo} /></Link>
                            <Link><img style={{ width: '100px', height: '30px', borderRadius: '12px', marginLeft: '10px' }} src={Appstore} /></Link>
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
                <div>
                    <h3>popular search</h3>
                    <p style={{ textTransform: 'capitalize', wordSpacing: '5px', letterSpacing: '4px', textAlign: 'justify', wordBreak: 'break-all' }}>sherwani|track
                        pants|blazers|sweaters for men|men wedding dresses|kurta pajama|raincoats|shorts|trousers|waistcoat
                        |inner wear|night wear|jeans|shirts|jogger jeans|men suits|t shirts|sweatshirts|jackets for men
                        |tracksuits|ripped jeans|ethnic wear|hoodies|rakshabandhangifts|watches|shoes|belts|swimwear|dhotis|boxers|vests|thermals|socks|shurgs|bracelers|rings|sunglasses|headphones|
                        wallets|helmets|caps|mufflers|glovers|ties|cufflinks|men sandals|floaters|flip flops|trunks|bags
                    </p>
                </div>
            </div>
        )
    }

}
export default Men