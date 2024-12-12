// import React from 'react'
import Approach from './Approach'
import ImageCarousel from './Belivers'
import Navbar from './navbar'
import Resourses from './Resourses'
import Slideshow from './SlideShow'
import Footer from './footer'

const Hero = () => {
  return (
    <div>
      <Navbar/>
      <Slideshow/>
      <Approach/>
      <Resourses/>
      <ImageCarousel/>
      <Footer/>
    </div>
  )
}

export default Hero
