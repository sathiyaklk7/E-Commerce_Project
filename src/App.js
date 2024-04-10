import React from "react";
import Signuplogo from './logo/signuplogo.jpeg'
import LOGO from './logo/ShopyVision-300x93-removebg-preview.png'
import Loginlogo from './logo/enter.png'
import Onshophy from './logo/onshop.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './NAV/nav.css'
import Signup from './Login/singup'
import Home from "./NAV/home"
import Men from "./NAV/Men"
import Women from "./NAV/women"
import Kids from "./NAV/kids"
// import Homeliving from "./NAV/home&living"
import About from "./NAV/About";
import Login from "./Login/logintask1"
// import home contents
import Top_Left from './NAV/Home/Homepage_images/Home_Contents/Min50per'
import Top_Right from './NAV/Home/Homepage_images/Home_Contents/Topright'
import Backpacks from './NAV/Home/Homepage_images/Home_Contents/Backpack'
import Best_of_Airpods from './NAV/Home/Homepage_images/Home_Contents/Airpods'
import Smart_Works_wear from './NAV/Home/Homepage_images/Home_Contents/SmartWorkWears'
import Premium from './NAV/Home/Homepage_images/Home_Contents/PremiumCarry'
import Headphones from './NAV/Home/Homepage_images/Home_Contents/Headphone'
import Watches from './NAV/Home/Homepage_images/Home_Contents/Watches'
import Workwear_Women from './NAV/Home/Homepage_images/Home_Contents/WorkWearWomen'
import Eyewear from './NAV/Home/Homepage_images/Home_Contents/EyeWear'
import Workwear_Men from './NAV/Home/Homepage_images/Home_Contents/WorkWearMen'
import Flip_Flops from './NAV/Home/Homepage_images/Home_Contents/Flip_Flop'
import Style_Men from './NAV/Home/Homepage_images/Home_Contents/Inclusive_Style_Men'
import Style_Women from './NAV/Home/Homepage_images/Home_Contents/Inclusive_Style_Women'


// import men contents
import Shirt from '../src/NAV/Men/Shirts'
import T_Shirt from '../src/NAV/Men/T-Shirts'
import Jeans from './NAV/Men/jeans'
import Shorts_Trousers from './NAV/Men/shorts&Trouser'
import Casual_Shoes from './NAV/Men/Casualshoes'
import Infant_Essentials from './NAV/Men/InfantEssential'
import Polo from './NAV/Men/Uspolo'
import Levis from './NAV/Men/Levis'
import Tommy from './NAV/Men/TommyHilifiber'
import UnitedColor from './NAV/Men/UnitedColor'
import Indian_wear from './NAV/Men/AllWhiteIndianWear'
import Ethinic_Casuals from './NAV/Men/EthinicCasual'
import Printed_kurta from './NAV/Men/PrintedKurtaSets'
import Everyday_Kurtas from './NAV/Men/EveryDayKurta'
import Handpicked_Trendy from './NAV/Men/Handpicked'
import Crocs from './NAV/Men/Crocs'
import Sketchers from './NAV/Men/Sketchers'
import Puma from './NAV/Men/Puma'
import Nike from './NAV/Men/Nike'

//import men shirts
import Shirt1_1 from './NAV/Men/Shirts/Shirts_1'
import Shirt1_2 from './NAV/Men/Shirts/Shirts_2'
import Shirt1_3 from './NAV/Men/Shirts/Shirt_3'
import Shirt1_4 from './NAV/Men/Shirts/Shirt_4'
import Shirt1_5 from './NAV/Men/Shirts/Shirt -5'
import Shirt1_6 from './NAV/Men/Shirts/Shirt_6'
import Shirt2_1 from './NAV/Men/Shirts/Shirt2_1'
import Shirt2_2 from './NAV/Men/Shirts/Shirt2_2'

import Whiteshirt1 from './NAV/Men/Shirts/BlackShirt_1'


const App = () => {
  return (
    <div  >
      <div className="navonemain">
        
        <div>
          <img className="onshoplogo" src={LOGO} />
        </div>
        <div>
          <input className="mainsearch" type="text" placeholder="Search shirts or T-Shirts eg Shorts Pants " />
        </div>
      </div>
      <Router>
        <div> 
            <nav>
              <ul className="navmain">
                <li className="navli">
                  <Link to="/home"><img className="homelogo" src={Onshophy} /></Link>
                </li>
                <li className="navli">
                  <Link className="navlink" to="/men">MEN</Link>
                </li>

                <li className="navli">
                  <Link className="navlink" to="/women">WOMEN</Link>
                </li>
                <li className="navli">
                  <Link className="navlink" to="/kids">KIDS</Link>
                </li>
                {/* <li className="navli">
                  <Link className="navlink" to="/homeliving">HOME&LIVING</Link>
                </li> */}
                <li className="navli">
                  <Link className="navlink" to="/about">ABOUT</Link>
                </li>
                
                <li>
                  <Link to="/">
                    <img className="signuplink" src={Signuplogo} />
                  </Link>
                </li>
                <li className="Navlogin">
                  <Link to="/login">
                    <img className="loginlogo" src={Loginlogo} />
                  </Link>
                </li>
              </ul>
            </nav>
        </div>
        <Routes>
          <Route path="/home"  element={< Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          {/* <Route path="/homeliving" element={<Homeliving />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" exact element={< Signup />} />

          <Route path="/Top_Left" element={<Top_Left />} />
          <Route path="/Top_Right" element={<Top_Right />} />
          <Route path="/Backpacks" element={<Backpacks />} />
          <Route path="/Best_of_Airpods" element={<Best_of_Airpods />} />
          <Route path="/Smart_Works_wear" element={<Smart_Works_wear />} />
          <Route path="/Premium" element={<Premium />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/Watches" element={<Watches />} />
          <Route path="/Workwear_Women" element={<Workwear_Women />} />
          <Route path="/Eyewear" element={<Eyewear />} />
          <Route path="/Workwear_Men" element={<Workwear_Men />} />
          <Route path="/Flip_Flops" element={<Flip_Flops />} />
          <Route path="/Style_Men" element={<Style_Men />} />
          <Route path="/Style_Women" element={<Style_Women />} />
          
          <Route path="/shirt1"  element={< Shirt />} />
          <Route path='/shirt1_1' element={<Shirt1_1 />} />
          <Route path='/shirt1_2' element={<Shirt1_2 />} />
          <Route path='/shirt1_3' element={<Shirt1_3 />} />
          <Route path='/shirt1_4' element={<Shirt1_4 />} />
          <Route path='/shirt1_5' element={<Shirt1_5 />} />
          <Route path='/shirt1_6' element={<Shirt1_6 />} />
          <Route path='/Shirt2_1' element={<Shirt2_1 />} />
          <Route path='/Shirt2_2' element={<Shirt2_2 />} />

          <Route path="/Whiteshirt1" element={<Whiteshirt1 />} />
         

          <Route path="/T_Shirt1" element={<T_Shirt />}/>
          <Route path="/Jeans" element={<Jeans />}/>
          <Route path="/Shorts_Trousers" element={<Shorts_Trousers />} />
          <Route path="/Casual_Shoes" element={<Casual_Shoes />} />
          <Route path="/Infant_Essentials" element={<Infant_Essentials />} />
          <Route path="/Polo" element={<Polo />} />
          <Route path="/Levis" element={<Levis />} />
          <Route path="/Tommy" element={<Tommy />} />
          <Route path="/UnitedColor" element={<UnitedColor />} />
          <Route path="/Indian_wear" element={<Indian_wear />} />
          <Route path="/Ethinic_Casuals" element={<Ethinic_Casuals />} />
          <Route path="/Printed_kurta" element={<Printed_kurta />} />
          <Route path="/Everyday_Kurtas" element={<Everyday_Kurtas />} />
          <Route path="/Handpicked_Trendy" element={<Handpicked_Trendy />} />
          <Route path="/Crocs" element={<Crocs />} />
          <Route path="/Sketchers" element={<Sketchers />} />
          <Route path="/Puma" element={<Puma />} />
          <Route path="/Nike" element={<Nike />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App