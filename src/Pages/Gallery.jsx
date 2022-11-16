import React from 'react'
import Navbar from '../Components/Navbar'
import Projects from '../Projects'
const Gallery = () => {
  return (
    <>
      <div className='outer-container'>
        <Navbar pageWrapId={"page-wrap"} OuterContainerId={"outer-container"} />
        <section className='page-wrap bg-[#301934] h-[100%]'>
          <h1 className='text-white text-center font-bold text-5xl pt-[5%]'>MY PROJECTS</h1>
          <div className='flex justify-center align-middle text-white'>
              {/* <h1>Gallery</h1> */}
              <ul>
                {Projects.map((project) => { 
                  return ( 
                    <li key={project.id} className=''>
                      
                      <img src={project.image} alt={project.title} className='h-[80vh] w-[80vw] relative my-[5rem] shadow-2xl bg-fixed shadow-blue-300/100 bg-black  md:h-[30%]w-[30%]'/>
                      <div >

                      </div>
                      <div className='text-center mt-[] text-white z-30'>
                        <h3 className='font-bold text-5xl'>{project.title}</h3>
                        <h3 className='font-semibold text-xl'>{project.description}</h3>
                      </div>
                    </li>
                  )
                })}
              </ul>
          </div>
        </section>
      </div>
    </>
    
  )
}





export default Gallery 