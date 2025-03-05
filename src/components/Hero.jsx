import React from 'react'
import MultiButton from './MultiButton'
import Ai from '../pictures/Ai.jpg'



function Hero() {
  return (
    <div className='hero-section'>
      <div className="bg-img">
        {/* <img src={hero} alt="" /> */}
        <div className="main">
          <div className="right-section">
            <h1 className='head2'>How AI Will <br /> Change the Future</h1>
            <p>The Future of AI will see home Robot having enhance <br />
                intelligence, increased capabilities, and becoming more <br />
                personal and posibly cute. For example, home robot <br />
                will over come navigation, direction 
            </p>
            <p className='button-rd'>
            <MultiButton  content="Read more" />
            </p>
          </div>
          <div className="left-section">
            <img src={Ai} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
