import React from 'react';
import './signup.css';
import profile from "../../assets/login.jpg";
import email from "../../assets/email.jpg";
import pass from "../../assets/lock.jpg"
import {FaUser} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
const Signup = () =>{
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
           <h2>Sign up</h2>
           <div className='fisrt-input'>
             <MdEmail className="icon"/>
             <input type="text" placeholder="Enter your emailId" className="name-input"/>
           </div>
           <div className='fisrt-input'>
             <FaUser className="icon"/>
             <input type="text" placeholder="Enter your UserId" className="name-input"/>
           </div>
           
           <div className="second-input">
             <FaLock className="icon"/>
             <input type="password" placeholder=" Password " className="name-input"/>
           </div>
           <div className="second-input">
             <FaLock className="icon"/>
             <input type="password" placeholder="Confirm password " className="name-input"/>
           </div>
          <div className="login-button">
          <button className='btn'>Sign up</button>
          </div>
           
            <p className="link flex">
              <a className='alogin' href="#">Already register ?</a> Or <a className='alogin' href="login">Login</a>
            </p>
          </div>
       </div>
      </div>
    </div>
  );
}

export default Signup;
