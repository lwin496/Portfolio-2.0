import React from 'react'
import Navbar from '../Components/Navbar'
import Projects from '../Projects'
const Gallery = () => {
  return (
    <>
      <div className='outer-container'>
        <Navbar pageWrapId={"page-wrap"} OuterContainerId={"outer-container"} />
        <section className='page-wrap bg-[#301934] h-[100%]'>
          <h1 className='text-white text-center font-bold text-8xl pt-[5%]'>MY PROJECTS</h1>
          <div className='bg-white h-[.5rem] w-[50%] m-auto'></div>
          <div className='flex justify-center align-middle text-white'>
              {/* <h1>Gallery</h1> */}
              <ul>
                {Projects.map((project) => { 
                  return ( 
                    <li key={project.id} className='my-[5rem] w-[90%] m-auto'>

                      <div className='relative bg-gray-800 '>
                        <img src={project.image} alt={project.title} className='opacity-[40%]' />
                        <h3 className='absolute text-7xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{project.title}</h3>
                        <h3 className='absolute text-2xl semi-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[5rem] text-center'>{project.description}</h3>
                        <a href={project.link} className='absolute text-2xl semi-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[10rem] bg-purple-800 p-2 font-semibold'>Go to Page</a>
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