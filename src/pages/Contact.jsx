import React from 'react'
import Navbar from '../components/Navbar'
import map from '../pictures/map.jpg'
import Footer from '../components/Footer'

function Contact() {
  return (

    <>
        <Navbar/>
       
        <div className="contact-content">
           <h1>Get in Touch</h1>
            <p className='b2'>Contact us to publish your content and show ads to our <br /> website and get a good reach.</p>
        </div>

        <div className="contact-cards">

          <div className="Ccard">
            <p className='icon'>+</p>
            <p className='place'>Office</p>
            <p className='place-st'>Victoria Street, London, UK</p>
          </div>

          <div className="Ccard">
            <p className='icon'>+</p>
            <p className='place'>Email</p>
            <p className='place-st'>hello@murtaza.com</p>
          </div>

          <div className="Ccard">
            <p className='icon'>+</p>
            <p className='place'>Phone</p>
            <p className='place-st'>+92317,2381608</p>
          </div>

        </div>

        <div className="CA-section3">
                <img src={map} alt="" />
            </div>
            <div className="CA-section4">
                <div className="firstline">
                    <div className="input-name">
                        <label htmlFor="nameinput">Name</label> <br />
                        <input type="text"  id='nameinput'/>
                    </div>
                    <div className="input-name">
                        <label htmlFor="emailinput">Email</label> <br />
                        <input type="email" id='emailinput' />
                    </div>
                </div>
                <div className="firstline">
                    <div className="input-name">
                        <label htmlFor="phoneinput">Phone</label> <br />
                        <input type="text"  id='phoneinput'/>
                    </div>
                    <div className="input-name">
                        <label htmlFor="subjectinput">Subject</label> <br />
                        <input type="email" id='subjectinput' />
                    </div>
                   </div>
                <div className="firstline">
                    <div className="input-name">
                        <label htmlFor="messageinput">Message</label> <br />
                        <textarea type="text"  id='messageinput' rows={9}/>
                    </div>
                </div>
                <div className="submit-btn">
                    <button>Send Message</button>
                </div>
            </div>

            <Footer />
    </>
  )
}

export default Contact
