import React from 'react'
import Navbar from '../Components/Navbar'
import KeyboardNormal from '../Imgs/Keyboard Phone.jpg'
import { useState } from 'react'
// `url('https://res.cloudinary.com/duc4ngc5i/image/upload/v1669160739/Portfolio%202.0%20/orion-nebula-11107_f1zdoq.jpg
import video from '../Imgs/moon.mp4'
import {FaInstagramSquare} from 'react-icons/fa'



const About = () => {
  
  return (
  <>

    <div className='outer-container overflow-hidden'>
      <Navbar pageWrapId={"page-wrap"} OuterContainerId={"outer-container"} />
      <section className='page-wrap bg-[#191919] '>
        {/* first section */}
        <div className='h-[65vh] bg-slate-500 flex flex-col justify-center items-center'>
          <div className="video-docker absolute top-0 left-0 w-full h-[65vh] overflow-hidden">
              <video className="min-w-full min-h-full absolute object-cover" src={video} type="video/mp4" autoPlay muted loop></video>
          </div>
          <div className='video-content pt-1'>
              <div className='flex flex-col items-center'>
                <h1 className='font-bold text-[5rem] text-white'>ABOUT ME</h1>
                <button className='bg-purple-800 text-2xl p-3 text-white hover:bg-purple-900'>RESUME</button>
              </div>
          </div>
        </div>
        {/* second section */}
        {/* main flex box */}
        <div className='h-[100%] bg-[#301934] flex flex-row pt-[10vh]'>
          {/* first row */}
          <div className='w-[50%] flex items-center flex-col text-white'>
            <h3 className='text-6xl font-bold py-5'>MORE ABOUT ME</h3>
            <img src={KeyboardNormal} alt="picture of louis" className='w-[35rem] h-[35rem] rounded ' /> 
            <p className='font-normal text-xl w-[35rem] tracking-wide pt-10 pb-10'>Hello! I'm a web developer in training at West-Mec-Nec. I am a 2nd year student and I am currently learning backend web devleopment. We are learning the MERN stack. I have a huge interest in technology as well as other interest like Psychology and Film. I am the current Vice President of my FBLA chapter (2022-2023) and was the Treasurer last year (2021-2022). I am known to be quite energitic and personable, Thanks for reading!  </p>
          </div>
          {/* second row */}
          <div className='mt-5 font-semibold text-3xl w-[50%]'>

            <h1 className='pb-2 text-center text-6xl text-white pb-10'>MY SKILLS</h1>

            <div className='flex flex-col items-start m-auto bg-gray-100 w-[35rem] py-10' >

                <div className='m-auto'>
                  <h3>HTML</h3>
                  <div className="w-[30rem] bg-gray-200 rounded-full my-5">
                    <div class="bg-purple-400  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '85%'}}> 85%</div>
                  </div>
                </div>

                <div className='m-auto'>
                  <h3>CSS</h3>
                  <div className="w-[30rem] bg-gray-200 rounded-full my-5">
                    <div className="bg-purple-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '80%'}}> 80%</div>
                  </div>
                </div>

                <div className='m-auto'>
                  <h3>JS</h3>
                  <div className="w-[30rem] bg-gray-200 rounded-full my-5">
                    <div className="bg-purple-400  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '70%'}}> 70%</div>
                  </div>
                </div>

            </div>
          </div>  
        </div>
      </section>
  
  </div>
  </>
  )
}

export default About



 {/* <button onClick={() => setLightTheme(prevTheme => !prevTheme)}>Toggle Theme</button> */}
        {/* <div className='flex flex-row'>   
          <div className='bg-[#191919] w-[40%] h-[100%]'>
            <img src={KeyboardNormal} alt="image of louis" className='h-[100vh]' />
          </div>
          <div className='bg-[#301934] w-[65%] h-[100vh]  text-white'>
            <div className='pl-[5vw] pt-[2vh]'>
              <h1 className='font-bold text-5xl'>About Me!</h1>
              <h1 className='font-bold text-8xl text-purple-400 mb-10'>Louis Win</h1>
              <h3 className='font-semibold text-4xl mb-5'>Web Developer</h3>
              <p className='font-normal text-xl w-[60%] tracking-wide'>Hello! I'm a web developer in training at West-Mec-Nec. I am a 2nd year student and I am currently learning backend web devleopment. We are learning the MERN stack. I have a huge interest in technology as well as other interest like Psychology and Film. I am the current Vice President of my FBLA chapter (2022-2023) and was the Treasurer last year (2021-2022). I am known to be quite energitic and personable, Thanks for reading!  </p> */}
              {/* skills bars */}
              {/* <div className='mt-5 font-semibold text-3xl'>
                <h1 className='pb-2'>My <span className='text-yellow-500'>Current</span> Skills</h1>
                <h3>HTML</h3>
                <div className="w-[20rem] bg-gray-200 rounded-full">
                  <div class="bg-purple-400  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '85%'}}> 85%</div>
                </div>
                <h3>CSS</h3>
                <div className="w-[20rem] bg-gray-200 rounded-full">
                  <div className="bg-purple-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '80%'}}> 80%</div>
                </div>
                <h3>JS</h3>
                <div className="w-[20rem] bg-gray-200 rounded-full">
                  <div className="bg-purple-400  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '70%'}}> 70%</div>
                </div>
              </div> */}
              {/* social Media */}
              
              {/* <div className='flex w-[60%] mt-5'>
                  <a href="#">
                   <img src="https://res.cloudinary.com/duc4ngc5i/image/upload/v1669927383/Portfolio%202.0%20/instagram_wdomlc.png" alt="instagram" className='h-[3rem] pr-4 hover:h-[3.5rem]' />
                  </a>
                  <a href="#">
                   <img src="https://res.cloudinary.com/duc4ngc5i/image/upload/v1669928123/Portfolio%202.0%20/github_lclds6.png" alt="github" className='h-[3rem] px-4 hover:h-[3.5rem]' />
                  </a>
                  <a href="#">
                   <img src="https://res.cloudinary.com/duc4ngc5i/image/upload/v1669928235/Portfolio%202.0%20/linkedin_ytcd3k.png" alt="linkedin" className='h-[3rem] px-4 hover:h-[3.5rem]' />
                  </a>
              </div> */}
            
          {/* </div>
        </div> */}
      {/* </div> */}