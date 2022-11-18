import React from 'react'
import Navbar from '../Components/Navbar'
import Louis from '../Imgs/louisaboutme.png'
import githubIcon from '../Imgs/githubicon.png'
import linkedinIcon from '../Imgs/linkedinicon.svg'
import instagramIcon from '../Imgs/instagram-logo-circle.png'
import youtubeIcon from '../Imgs/youtubeicon.png'
const About = () => {

  return (
  <>
    <div className='outer-container overflow-hidden'>
      <Navbar pageWrapId={"page-wrap"} OuterContainerId={"outer-container"} />
      <section className='page-wrap bg-[#301934] h-[100vh]  bg-no-repeat bg-cover' style={{backgroundImage:`url('https://images.hdqwalls.com/download/moon-fox-galaxy-4k-79-2560x1440.jpg')` }}>
            <div className='flex text-white flex-col'>
                <h1 className='text-5xl m-auto mt-[10vh] mb-[1rem] font-bold'>ABOUT <span className='text-purple-400'>ME</span></h1>
                <h3 className='m-auto mb-[1rem] w-[50%] font-semibold'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi eum, cumque expedita veritatis placeat neque nostrum et quae illo tempora voluptatem, totam magni non voluptates quasi aliquid ab, nemo aut tempore. T empore pariatur consequuntur dolorem nulla exercitationem quaerat consequatur.
                </h3>
                
                <div className='w-[55%] h-[.25rem] bg-white m-auto'></div>
                  <div className='w-[10%] h-[10%]'>
                    <a href="#" className='relative left-[55vw] top-[0vh]'>
                      <img src={githubIcon} alt="mygithub" className='motion-safe:animate-bounce' />
                    </a>
                    <a href="#" className='relative left-[65vw] top-[10vh]'>
                      <img src={linkedinIcon} alt="mylinkedIn" className='animate-bounce' />
                    </a>
                    <a href="#" className='relative left-[30vw] bottom-[20vh]'>
                      <img src={instagramIcon} alt="myInstagram" className='animate-bounce' />
                    </a>
                    <a href="#" className='relative left-[30vw] bottom-[10vh]'>
                      <img src={youtubeIcon} alt="myYoutubeicon" className='animate-bounce' />
                    </a>
                  </div>
                <img src={Louis} alt="louis" className='h-[60%] left-[40%] fixed bottom-[0px]' />
               
            </div>
      </section>
    </div>
  </>
  )
}

export default About
