import React from "react";
import './Shirts.css'
import img from '../Workwear Men.jpg'
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
                        <input type="checkbox" name="check3" value={this.state.check3} onChange={this.onclickChange} ></input><label>Black</label><br />
                        <input type="checkbox" name="check4" value={this.state.check4} onChange={this.Red} ></input><label>White</label><br />


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
                                            <Link ><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
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
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
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
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
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
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
                                            <h4>Mast & Harbour</h4>
                                            <p>Men Slim Fit casual sustainable</p>
                                            <p><span>Rs.1200</span> <del>Rs.2200</del><mark>(Rs.1000) OFF</mark></p></Link>
                                        </div>
                                        <div className="first_shirt_click">
                                            <Link><img src={img} />
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