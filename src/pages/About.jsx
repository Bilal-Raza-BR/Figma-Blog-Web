import React from 'react'
import Navbar from '../components/Navbar'
import Section3 from '../components/Section3'
import item1 from '../pictures/item1.jpg'
import item2 from '../pictures/item2.jpg'
import item3 from '../pictures/item3.jpg'
import Footer from '../components/Footer'
import { useState } from 'react';
import { database } from './service/firebase';
import { set, ref, get, child } from 'firebase/database';

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(1);
  const [dataDb, setDataDb] = useState("");
  const [data, setData] = useState({ image: '', title: '', des: '' });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    if (!data.image || !data.des || !data.title) {
      alert("Please Full Fill The Form");
    } else {
      set(ref(database, `FigmaPost/PostNo${counter}/`), data)
        .then((e) => {
          alert(" Uploding Post Succesfully");
          console.log(e);
          setCounter(counter + 1);
        })
        .catch((c) => {
          alert(c);
        });

        // get(child(ref(database), 'FigmaPost'))
        // .then((abc) => {
        //   setDataDb(abc.val());
        //   console.log(dataDb);
        // })
        // .catch((c) => {
        //   console.log(c);
        // });
    }
  };

  const getData = async () => {
    alert('hello')
   let stored =  await get(ref(database), 'FigmaPost')
   let value = stored.val()
   console.log(value);
   
  
  };

  // useEffect(() => {
  //  return getData()
  // }, [counter]);

  
  

  return (
    <>
      <Navbar />
      <button onClick={getData}>Get</button>
      <button className='mBtn' onClick={handleOpenModal}>Add Post</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>❎</span>
            <h2 className='mH2'>Create Post</h2>
            
            <input type="text" placeholder="Image URL"  name='image' value={data.image} onChange={handleChange} />
            <input type="text" placeholder="Title" name='title'  value={data.title} onChange={handleChange} />
            <textarea placeholder="Description" name='des'  value={data.des} onChange={handleChange} />
            <button onClick={handleCloseModal} className="submit-btn">Post</button>
          </div>
        </div>
      )}
    
  

    <div className="blog-content">
      <p className='b1'>Our Blog</p>
      <h1>Find our all blogs from here</h1>
      <p className='b2'>our blogs are written from very research research and well known writers writers so that we can provide <br />
       you the best blogs and articles articles for you to read them all along</p>
    </div>

    <Section3 />

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

          <Footer />

    
    </>
  )
}

export default About
