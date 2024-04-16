import React from "react";
import './Shirts.css'
import img from './Shirts/shirt1-1.webp'
import img2 from './Shirts/Shirt_imges/shirt2/1.webp'
import img3 from './Shirts/Shirt_imges/shirt3/1.webp'
import img4 from './Shirts/Shirt_imges/shirt4/1.webp'
import img5 from './Shirts/Shirt_imges/shirt5/1.webp'
import img6 from './Shirts/Shirt_imges/shirt6/1.webp'
import img7 from './Shirts/Shirt_imges/shirt7/1.webp'
import img8 from './Shirts/Shirt_imges/shirt8/1.webp'
import img9 from './Shirts/Shirt_imges/shirt9/1.webp'
import img10 from './Shirts/Shirt_imges/shirt10/1.webp'
import img11 from './Shirts/Shirt_imges/shirt11/1.webp'
import img12 from './Shirts/Shirt_imges/shirt12/1.webp'
import img13 from './Shirts/Shirt_imges/white_Shirts/1/1.webp'
import img14 from './Shirts/Shirt_imges/white_Shirts/2/1.webp'
import img15 from './Shirts/Shirt_imges/white_Shirts/3/1.webp'
import img16 from './Shirts/Shirt_imges/white_Shirts/4/1.webp'
import img17 from './Shirts/Shirt_imges/white_Shirts/5/1.webp'
import img18 from './Shirts/Shirt_imges/white_Shirts/5/2.webp'

import {BrowserRouter as Routers,Router,Routes, Link } from "react-router-dom";
// import ReactApexCharts from 'react-apexcharts'
// import { shirtsOne } from './shirts1'
class Shirts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false,
            check2: false,
            check3: false,
            check4: false
        }
        
    }
    onValueChange = (e) => {
        if (this.state.check == false) {
            this.setState({
                [e.target.name]: true
            })
        }
        else {
            this.setState({
                [e.target.name]: false
            })
        }
    }
    onChange = (b) => {
        if (this.state.check2 == false) {
            this.setState({
                [b.target.name]: true
            })
        }
        else {
            this.setState({
                [b.target.name]: false
            })
        }
    }
    onclickChange = (i) => {
        if (this.state.check3 == false) {
            this.setState({
                [i.target.name]: true
            })
        }
        else {
            this.setState({
                [i.target.name]: false
            })
        }
    }
    Red=(j)=>{
        if(this.state.check4==false){
            this.setState({
                [j.target.name]:true
            })
        }
        else{
            this.setState({
                [j.target.name]:false
            })
        }
    }
    render() {
        return (
            <div className="main_Shirts_onClick" >
                <div style={{maxWidth:'250px',maxHeight:'100%'}}>
                <div className="main_left_shirts_onClick">
                    <div className="sub_main_left_shirts_onClick" >
                        <input type="checkbox" name="check" value={this.state.check} onChange={this.onValueChange} ></input>  <label>Rs.999 to Rs.1999</label><br />
                        <input type="checkbox" name="check2" value={this.state.check2} onChange={this.onChange} ></input><label>Rs.2000 to Rs.4000</label><br />
                        <h3>Color</h3>
                        <input type="checkbox" name="check3" value={this.state.check3} onChange={this.onclickChange} ></input><label>White</label><br />
                        <input type="checkbox" name="check4" value={this.state.check4} onChange={this.Red} ></input><label>Black</label><br />


                    </div>
                </div>
                </div>
                <div className="main_right_shirts_onClick">
                    <div>
                        <div >
                            {
                                this.state.check == true ?
                                    <div className="main_first_shirt_onClick">
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/shirt1_1' ><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/shirt1_2'><img src={img2} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/shirt1_3'><img src={img3} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/shirt1_4'><img src={img4} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/shirt1_5' ><img src={img5} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/shirt1_6'><img src={img6} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        {/* {
                                            shirtsOne.map((p) => (
                                                <div>
                                                    <img src={p.img} />
                                                </div>
                                            ))
                                        } */}
                                    </div>
                                    :
                                    null
                            }
                        </div>
                        <div>
                            {
                                this.state.check2 == true ?
                                    <div className="main_first_shirt_onClick">
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/Shirt2_1'><img src={img7} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/Shirt2_2' ><img src={img8} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/Shirt2_3'><img src={img9} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/Shirt2_4'><img src={img10} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/Shirt2_5'><img src={img11} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/Shirt2_6'><img src={img12} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        
                                    </div>
                                    :
                                    null
                            }
                        </div>
                        <div>
                            {
                                this.state.check3 == true ?
                                    <div className="main_first_shirt_onClick">
                                        <div className="first_shirt_click">
                                            <Link className="link" to='/whiteshirt1'><img src={img13} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link"><img src={img14} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link"><img src={img15} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link"><img src={img16} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link"><img src={img17} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link"><img src={img18} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        
                                    </div>
                                    :
                                    null
                            }
                        </div>
                        <div>
                            {
                                this.state.check4 == true ?
                                    <div className="main_first_shirt_onClick">
                                        <div className="first_shirt_click">
                                            <Link className="link"><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link"><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link"><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link"><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link"><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link className="link"><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

}
export default Shirts