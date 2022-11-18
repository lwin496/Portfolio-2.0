import React from 'react'
import Navbar from '../Components/Navbar'
import Louis from '../Imgs/louisaboutme.png'
const About = () => {

  return (
  <>
    <div className='outer-container'>
      <Navbar pageWrapId={"page-wrap"} OuterContainerId={"outer-container"} />
      <section className='page-wrap bg-[#301934] h-[100vh] object-fill'>
            <div className='flex text-white flex-col'>
                <h1 className='text-5xl m-auto mt-[10vh] mb-[3rem] font-bold'>ABOUT <span className='text-purple-400'>ME</span></h1>
                <h3 className='m-auto mb-[1rem] w-[50%] font-semibold'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi eum, cumque expedita veritatis placeat neque nostrum et quae illo tempora voluptatem, totam magni non voluptates quasi aliquid ab, nemo aut tempore. Tempore pariatur consequuntur dolorem nulla exercitationem quaerat consequatur.
                </h3>
                <div className='w-[30%] h-[.25rem] bg-white m-auto'></div>
                <img src={Louis} alt="louis" className='h-[60%] left-[40%] fixed bottom-[0px]' />
            </div>
      </section>
    </div>
  </>
  )
}

export default About
