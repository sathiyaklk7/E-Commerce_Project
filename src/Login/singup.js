// import React from "react";
// import '../Login/signup.css'
// import signupimg from'../Imgaes/signup/signup2.jpg'
// // import bigimg from '../Imgaes/Home/homepageimg.jpg'
// function sign() {

//     function singup() {
//         var name = document.getElementById("name").value
//         var email = document.getElementById("email").value
//         var username = document.getElementById("username").value
//         var password = document.getElementById("password").value
//         var repeatpassword = document.getElementById("repeatpassword").value
//         if (name == 'R.johnsathiya' && email == 'johnsathiya6702@gmail.com' & username == "johnsthiya_07" && password == 'Rjsathiya367' && repeatpassword == 'Rjsathiya367') {
//             alert('Sign Up Successfully')
//         }
//         else {
//             alert('Somethingwrong so unsuccessfully')
//         }
//     }
//     return (
//         <div className="signupmain">
//             <div>
//                 <img className="signupimg" src={signupimg} />
//             </div>
//             <div className="signupdiv">
//                 <h2 style={{
//                     textAlign: 'center',
//                     marginTop: "10px",
//                     fontWeight: 'lighter',
//                     fontSize: '50px',
//                     color: 'green'
//                 }}>Sign Up</h2>
//                 <div style={{ marginTop: '20px' }}>
//                     <label   >full name</label><br />
//                     <input className="input" id="name" placeholder="Enter your full name" type="text" /><br />
//                     <label>Email</label><br />
//                     <input className="input" id="email" placeholder="Enter your email" type='email' /><br />
//                     <label>username</label><br />
//                     <input className="input" id="username" placeholder="enter username" type="text" /><br />
//                     <label>password</label><br />
//                     <input className="input" id="password" placeholder="enter  password" type="password" /><br />
//                     <label>reapeat password</label><br />
//                     <input className="input" id="repeatpassword" placeholder="Re-Enter your password" type="password" /><br />
//                     <input className="chexkbox" type="checkbox" /> <p style={{
//                         textTransform: 'capitalize',
//                         marginLeft: '95px',
//                         marginTop: '-23px'
//                     }}>i agree to the <b>terms of users</b></p> <br />
//                 </div>
//                 <div style={{textAlign:'center'}}>
//                     <button className="signupbtn" onClick={singup}>Sign up</button>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default sign

import React from "react";
import '../Login/signup.css'
import signupimg from'../Imgaes/signup/signup2.jpg'
// import bigimg from '../Imgaes/Home/homepageimg.jpg'
import { useState } from "react";
function Sign() {
    const [fullname, setFullname] = useState('')
    const [Email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatpassword, setRepeatpassword] = useState('')
    const singUp = () => {
        if (fullname == "john" && Email == "john" && username == "john" && password == "123" && repeatpassword == "123") {
            window.alert("signup successfully")
            window.location="./login"

        }
        else {
            window.alert("signup failed")
        }

    }
    return (
        <div>
            <div className="signupmain">
                <div>
                    <img className="signupimg" src={signupimg} />
                </div>

                <div className="signupdiv">
                    <h2 style={{
                        textAlign: 'center',
                        marginTop: "10px",
                        fontWeight: 'lighter',
                        fontSize: '50px',
                        color: 'green'
                    }}>Sign Up</h2>
                    <div style={{ marginTop: '20px' }}>
                    <label   >full name</label><br />
                    <input className="input"  placeholder="Enter your full name"  type="text" value={fullname} onChange={(v) => setFullname(v.target.value)}  /><br />
                    <label>Email</label><br />
                    <input className="input" placeholder="Enter your email" type='email' value={Email} onChange={(v) => setEmail(v.target.value)}  /><br />
                    <label>username</label><br />
                    <input className="input"  placeholder="enter username" type="text" value={username} onChange={(v) => setUsername(v.target.value)}  /><br />
                    <label>password</label><br />
                    <input className="input"  placeholder="enter  password" type="password" value={password} onChange={(v) => setPassword(v.target.value)}  /><br />
                    <label>reapeat password</label><br />
                    <input className="input" placeholder="Re-Enter your password" type="password" value={repeatpassword} onChange={(v) => setRepeatpassword(v.target.value)}  /><br />
                    <input className="chexkbox" type="checkbox" /> <p style={{
                        textTransform: 'capitalize',
                        marginLeft: '95px',
                        marginTop: '-23px'
                    }}>i agree to the <b>terms of users</b></p> <br />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button className="signupbtn" onClick={singUp}>Sign up</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )

}
export default Sign