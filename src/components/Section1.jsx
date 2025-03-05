import React from 'react'
import MultiButton from './MultiButton'


function Section1() {
  return (
    <div className='section-1'>
      <div className="sectionImg-1">
        <div className="content-sec">
            <p className='dep'>DEVELOPMENT <span>16 March 2023</span></p>
            <h1>How to make a Game look more attractive with New <br />
            VR & AI Technology</h1>
            <p className='lp'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and <br />
               communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools <br />
                and resources that enable others, we’re committed to making AI accessible to everyone.
            </p>
            <p className='button-rd1'>
            <MultiButton  content="Read more" />
            </p>
        </div>
      </div>
    </div>
  )
}

export default Section1
