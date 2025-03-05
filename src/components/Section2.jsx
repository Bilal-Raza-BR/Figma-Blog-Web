import React from 'react'
import Aisection from '../pictures/Ai section 1.jpg'
import item1 from '../pictures/item1.jpg'
import item2 from '../pictures/item2.jpg'
import item3 from '../pictures/item3.jpg'
import MultiButton from './MultiButton'

function Section2() {
  return (
    <>
    <div className="left-right">
    <div className="content-btn">
        <h1>Our Recent Post</h1>
    </div>
    <div className="btn-right">
        <p className='button-rd2'>
            <MultiButton  content="View all" />
        </p>
    </div>
    </div>
    <div className='right-left'>
        <div className="left">
            <img src={Aisection} alt="" / >
        </div>
        <div className="right">
         <p className='dep'>DEVELOPMENT <span>16 March 2023</span></p>
         <h1>How to make a Game look more <br /> attractive with New VR & AI <br /> Technology</h1>
         <p className='p'>Google has been investing in AI for many years and bringing its <br /> 
         benefits to individuals, businesses and communities. Whether it’s <br />
         publishing state-of-the-art research, building helpful products or <br />
          developing tools and resources that enable others, we’re <br />
           committed to making AI accessible to everyone.
         </p>

         <p className='button-rd3'>
            <MultiButton  content="Read more" />
            </p>
        </div>
    </div>

    <div className="sec2-cards">
        <div className="item1">
            <img src={item1} alt="" />
            <p className='dep'>Travel <span>13 March 2023</span></p>
            <h1>8 Rules of Travelling In Sea You <br />
              Need To Know
            </h1>
            <p className='card-p'>Travelling in sea has many advantages. <br />
              Some of the advantages of transporting goods by  <br />
              sea include: you can ship large volumes at costs
            </p>
            <p className='ch'>Read more...</p>
        </div>

        <div className="item1">
            <img src={item2} alt="" />
            <p className='dep'>Development <span>11 March 2023</span></p>
            <h1>How to build strong portfolio and get  <br />
               a Job in UI/UX
            </h1>
            <p className='card-p'>Travelling in sea has many advantages. <br />
              Some of the advantages of transporting goods by  <br />
              sea include: you can ship large volumes at costs
            </p>
            <p className='ch'>Read more...</p>
        </div>

        <div className="item1">
            <img src={item3} alt="" />
            <p className='dep'>Sport <span>16 March 2023</span></p>
            <h1>How to Be a Professional Footballer<br />
               in 2023
            </h1>
            <p className='card-p'>Travelling in sea has many advantages. <br />
              Some of the advantages of transporting goods by  <br />
              sea include: you can ship large volumes at costs
            </p>
            <p className='ch'>Read more...</p>
        </div>
    </div>
    </>
  )
}

export default Section2
