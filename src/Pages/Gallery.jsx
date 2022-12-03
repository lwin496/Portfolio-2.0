import React from 'react'
import Navbar from '../Components/Navbar'
import Projects from '../Projects'
import ImageSlider from '../Components/ImageSlider'

const Gallery = () => {
  return (
    <>
      <div className='outer-container'>
        <Navbar pageWrapId={"page-wrap"} OuterContainerId={"outer-container"} />
        <section className='page-wrap bg-[#301934] h-[100vh]'>
            <ImageSlider slides={Projects} />
        </section>
      </div>
    </>
    
  )
}





export default Gallery 

