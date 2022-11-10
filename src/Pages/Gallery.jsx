import React from 'react'
import Navbar from '../Components/Navbar'

const Gallery = () => {
  return (
    <>
      <div className='outer-container'>
        <Navbar pageWrapId={"page-wrap"} OuterContainerId={"outer-container"} />
        <section className='page-wrap bg-[#301934] h-[100vh]'>
          <div className='flex justify-center align-middle text-white'>
              <h1>Gallery</h1>
          </div>
        </section>
      </div>
    </>
  )
}

export default Gallery
