import React from 'react'
import MultiButton from './MultiButton'
import item4 from '../pictures/item4.jpg'
import item5 from '../pictures/item5.jpg'
import item6 from '../pictures/item6.jpg'
import item7 from '../pictures/item7.jpg'
import item8 from '../pictures/item8.jpg'
import item9 from '../pictures/item9.jpg'


function Section3() {
  return (
    <>
     <div className="left-right1">
    <div className="content-btn">
        <h1>Popular Post</h1>
    </div>
    <div className="btn-right">
        <p className='button-rd2'>
            <MultiButton  content="View all" />
        </p>
    </div>
    </div>

     <div className="sec2-cards">
            <div className="item1">
                <img src={item4} alt="" />
                <p className='dep'>Travel <span>13 March 2023</span></p>
                <h1>
                Train Or Bus Journey?Which <br /> one suits?
                </h1>
                <p className='card-p'>Travelling in sea has many advantages. <br />
                  Some of the advantages of transporting goods by  <br />
                  sea include: you can ship large volumes at costs
                </p>
                <p className='ch'>Read more...</p>
            </div>
    
            <div className="item1">
                <img src={item5} alt="" />
                <p className='dep'>Development <span>11 March 2023</span></p>
                <h1>Best Website to research for your <br /> next project
                </h1>
                <p className='card-p'>Travelling in sea has many advantages. <br />
                  Some of the advantages of transporting goods by  <br />
                  sea include: you can ship large volumes at costs
                </p>
                <p className='ch'>Read more...</p>
            </div>
    
            <div className="item1">
                <img src={item6} alt="" />
                <p className='dep'>Sport <span>16 March 2023</span></p>
                <h1>How to Be a Dancer in 2023 with <br /> proper skills?
                </h1>
                <p className='card-p'>Travelling in sea has many advantages. <br />
                  Some of the advantages of transporting goods by  <br />
                  sea include: you can ship large volumes at costs
                </p>
                <p className='ch'>Read more...</p>
            </div>
            <div className="item1">
                <img src={item7} alt="" />
                <p className='dep'>Travel <span>13 March 2023</span></p>
                <h1>Who is the best singer on chart? <br /> Know him?
                </h1>
                <p className='card-p'>Travelling in sea has many advantages. <br />
                  Some of the advantages of transporting goods by  <br />
                  sea include: you can ship large volumes at costs
                </p>
                <p className='ch'>Read more...</p>
            </div>
    
            <div className="item1">
                <img src={item8} alt="" />
                <p className='dep'>Development <span>11 March 2023</span></p>
                <h1>How to start export import business <br /> from home?
                </h1>
                <p className='card-p'>Travelling in sea has many advantages. <br />
                  Some of the advantages of transporting goods by  <br />
                  sea include: you can ship large volumes at costs
                </p>
                <p className='ch'>Read more...</p>
            </div>
    
            <div className="item1">
                <img src={item9} alt="" />
                <p className='dep'>Sport <span>16 March 2023</span></p>
                <h1>Make some drinks with chocolates <br />  chocolates  and milk
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

export default Section3
