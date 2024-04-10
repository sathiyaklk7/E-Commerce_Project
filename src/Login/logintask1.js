// import "./login1.css";
// import React from 'react';
// import { BrowserRouter as Link,Router,Routes,Route } from "react-router-dom";
// class login1 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             state: "tamilnadu",
//             nationality: "indian",
//             age: 18
//         }

//     }
//     render() {
//         function log() {
//             var name = document.getElementById("name").value
//             var email = document.getElementById("email").value
//             var password = document.getElementById("password").value
//             if (name == "john" && email == "john@gmail.com" && password == "123") {
//                 alert("login successfully")
//                 window.location('./home')
//             }
//             else {
//                 alert("login failed")
//             }
//         }
//         return (
//             <div>
//                 {

//                     this.state.age <= 32 && this.state.state == "tamilnadu" && this.state.nationality == "indian" ?
//                         <div className="main">
//                             <div className="submain">
//                                 <h2 className="login_heading">Shopy Vision</h2>
//                                 <div style={{marginTop:'10px'}} className="login_one">
//                                     <label  className="login_name">Name</label>
//                                     <input className="login_input1" type="text" placeholder='Enter your Name...' id='name' /><br />
//                                 </div>
//                                 <div className="login_one">
//                                     <label className="login_name">Gmail</label>
//                                     <input className="login_input1" type="email" placeholder='Enter your Email Id...' id='email' /><br />
//                                 </div>
//                                 <div className="login_one">
//                                 <label className="login_name">Password</label>
//                                 <input className="login_input1" type="password" placeholder='Enter your password...' id='password' /><br />
//                                 </div>
//                                 <div className="login_btnn">
//                                 <button className="login_btn" onClick={log}>Log In</button>
//                                 </div>
//                             </div>
//                         </div>
//                         :
//                         <div className="maincannot">
//                             <h1 className="cannot">
//                                 <h1>you can't use insta</h1>
//                             </h1>
//                         </div>
//                 }
//             </div>
//         )
//     }
// }
// export default login1;

import React from "react";
import { useState } from "react";
import "./login1.css";

function Log() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [gmail, setgmail] = useState('')
    const UserName = () => {
        if (userName == 'john' &&   gmail == 'john' && password == '367') {
            window.alert('login ok')
            window.location = "./home"
        }
        else {
            window.alert('Login failed please Re-Login')
        }
    };
    return (
        <div>
            
                <div className="main">
                <div className="submain">
                    <h2 className="login_heading">Shopy Vision</h2>
                    <div style={{ marginTop: '10px' }} className="login_one">
                        <label className="login_name">Name</label>
                        <input className="login_input1" type="text" value={userName} onChange={(v) => setUserName(v.target.value)} placeholder="Enter your Username" /> <br /><br />
                    </div>
                    <div className="login_one" style={{marginTop:'-4px'}}>
                        <label className="login_name">Gmail</label>
                        <input className="login_input1" type="email" value={gmail} onChange={(v) => setgmail(v.target.value)} placeholder='Enter your Email Id...' id='email' /><br />
                    </div>
                    <div className="login_one">
                        <label className="login_name">Password</label>
                        <input className="login_input1" type="password" value={password} onChange={(v) => setPassword(v.target.value)} placeholder="Enter Your Password" /> <br /> <br />
                    </div>
                    <div className="login_btnn">
                        <button className="login_btn" placeholder="login" onClick={UserName} >Login</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Log