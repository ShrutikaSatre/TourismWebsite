import React from 'react';
import './login.css';
import profile from "../../assets/login.jpg";
import email from "../../assets/email.jpg";
import pass from "../../assets/lock.jpg"
import {FaUser} from "react-icons/fa";
import {FaLock} from "react-icons/fa";

const Login = () =>{
  return (
    <div className="lmain">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h2>Login</h2>
           <div className='fisrt-input'>
             <FaUser className="icon"/>
             <input type="text" placeholder="Enter your UserId" className="name-input"/>
           </div>
           <div className="second-input">
             <FaLock className="icon"/>
             <input type="password" placeholder="Enter your password " className="name-input"/>
           </div>
          <div className="login-button">
          <button className='btn'>Login</button>
          </div>
           
            <p className="link flex">
              <a className='alogin' href="#"> Forgot password ? </a> Or <a className='alogin' href="signup"> Sign Up </a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;
