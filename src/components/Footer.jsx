import React from 'react'
import MultiButton from './MultiButton'
import logo from '../pictures/logo.png'

function Footer() {
  return (
   <>
  
    <div className='footer-main'>
      <div className="footer-img">
        <div className="footer-content">
          <div className="step1">
            <h1>Get our stories delivered From <br /> us to your inbox weekly.</h1>
          </div>
          <div className="step2">
          <input type="text" placeholder='Your Email' id="" />
            <span className='button-rd4'>
            <MultiButton  content="Read more" />
            </span>
          </div>
          <div className="step3">
            <p>Get a response tomorrow if you submit by 9pm today. If we received after <br />
              9pm will get a reponse the following day
            </p>
          </div>
        </div>
      </div>
    </div>
       
     <center>
        <div className="logo2">
           <img src={logo} alt="" />
        </div>
      </center>

      <div className="navbar2">
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>

      <div className="alb">
        <ul>
          <li>FB.</li>
          <li>IG.</li>
          <li>LN.</li>
          <li>YT.</li>
        </ul>
      </div>

      <div className="hr">
        <hr />
      </div>

      <div className="copyright">
        <p>Copyright Ideapeel Inc © 2023. All Right Reserved</p>
      </div>
    </>
  )
}

export default Footer
