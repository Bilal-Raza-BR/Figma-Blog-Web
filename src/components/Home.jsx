import React from 'react'
import './../App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from './Footer'

function Home() {


    return (
        <>
            <Navbar />
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </>
    )
}

export default Home
