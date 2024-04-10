import React from "react";
import Content1 from './Shirt_imges/shirt3/1.webp'
import Content2 from './Shirt_imges/shirt3/2.webp'
import Content3 from './Shirt_imges/shirt3/3.webp'
import Content4 from './Shirt_imges/shirt3/4.webp'
import './Shirt1_1.css'
// import logos
import Bag_btn from './Shirt_imges/Logo/bag_btn.png'
import Wishlist_btn from './Shirt_imges/Logo/wishlist_btn.png'
import Van_order from './Shirt_imges/Logo/order_van-removebg-preview.png'

import Appstore from './Shirt_imges/Logo/appstore.png'
import googleplaylogo from './Shirt_imges/Logo/Google-Play-Logo-2022.webp'
import twitterlogo from './Shirt_imges/Logo/twitter.png'
import utubelogo from './Shirt_imges/Logo/utubelogo.jpeg'
import instalogo from './Shirt_imges/Logo/instalogo.jpeg'
import guaranteelogo from './Shirt_imges/Logo/guaranteelogo.jpeg'
import fourteendays from './Shirt_imges/Logo/14days.jpeg'
import fb from './Shirt_imges/Logo/fb.jpeg'
class Shirt1_1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imageURL:Content1,
            count:0
        }
    }
    image1 =()=>{
        this.setState({
            imageURL:Content1
        })
    }
    image2=()=>{
        this.setState({
            imageURL:Content2
        })
    }
    image3=()=>{
        this.setState({
            imageURL:Content3
        })
    }
    image4=()=>{
        this.setState({
            imageURL:Content4
        })
    }
    add=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    sub=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return(
            <div>
            <div style={{display:'flex'}}>
            <div className="Main_Shirt1_1">
                <div>
                    <img className="big" src={this.state.imageURL} />
                </div>
                <div className="Sub_Main_Shirt1_1">
                    <img src={Content1} onClick={this.image1} className="content_img" />
                    <img src={Content2} onClick={this.image2} className="content_img"/>
                    <img src={Content3} onClick={this.image3} className="content_img"/>
                    <img src={Content4} onClick={this.image4} className="content_img"/>
                </div>
            </div>
            <div className="Main_Shirt1_1_content">
                <h1 className="Shirt1_1_name">
                Mast & Harbour
                </h1>
                <p style={{fontSize:'23px'}}>Men Navy Blue & Red Checked Casual Sustainable Shirt</p>
                <div style={{display:'flex',background:'#2a2424',marginLeft:'30px',border:'solid 2px',width:'300px',height:'50px',color:'#f5f5f5',borderRadius:'8px '}}>
                    <h2  style={{fontSize:'30px',marginTop:'3px'}}>4.5  &#9733;</h2><hr /><p style={{fontSize:'30px',marginTop:'3px'}}>2.6k Ratings</p>
                </div><br /><  hr />
                <p><span style={{fontWeight:'bolder',fontSize:'40px',color:'green'}}>₹679</span> MRP<del>₹1999</del> <span style={{color:'red'}}>(66%OFF)</span></p>
                <p className="Rating_p">Rating</p>
                <div className="Shirt1_1_rating" >
                    <button onClick={this.sub}>-</button><h1>{this.state.count}</h1><button onClick={this.add}>&#43;</button>
                </div>
                <h2 className="select_size_h2">SELECT SIZE</h2><br />
                <div className="select_size_btn">
                    <button>32</button>
                    <button>34</button>
                    <button>36</button>
                    <button>38</button>
                </div>
                <div className="add">
                    <button className="bag_btn"><img src={Bag_btn} />Add to bag</button>
                    <button className="wishlist_btn"><img src={Wishlist_btn} />whishlist</button>
                </div>
                <h2 className="del_h2">delivery options<img src={Van_order} /></h2>
                <div className="delivery_main">
                    <input type="text" placeholder="Enter Pincode..." alt="check" /><br />
                    <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p><br />
                    <p className="p">100% Original Products</p><br />
                    <p className="p">Pay on delivery might be available</p><br />
                    <p className="p">Easy 14 days returns and exchanges</p><br />
                    <p className="p">Try & Buy might be available</p><br />
                </div>

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
            </div>
        )
    }

}
export default Shirt1_1