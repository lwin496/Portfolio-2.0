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
                <h1 className='font-bold text-[2rem] text-white sm:text-[5rem]'>ABOUT ME</h1>
                <button className='bg-purple-800 text-2xl p-3 text-white hover:bg-purple-900'>RESUME</button>
              </div>
          </div>
        </div>
        {/* second section */}
        {/* main flex box */}
        <div className='h-[100%] bg-zinc-200 flex flex-col'>
          {/* first row */}
          <div className='flex flex-col w-[90vw] m-auto justify-center lg:flex-row md:w-[80vw]'>
            {/* <img src={KeyboardNormal} alt="picture of louis" className='w-[35rem] h-[35rem] rounded ' /> 
            <div className=''>
              <h3>Age</h3>
              <h3>School</h3>
              <h3>Favorite Food</h3>
              <h3>Hobbies</h3>
            </div> */}
            <div className=' bg-zinc-200 h-[70%] pb-10'>
              <img src={KeyboardNormal} alt="picture of louis" className='w-[35rem] h-[0] mt-10 m-auto md:h-[35rem]' /> 
            </div>
            <div className='bg-zinc-200 h-[70%]'>
              <div className='bg-gray-100 h-[35rem] text-center m-auto mt-10 px-10 pt-5 mb-20 lg:mb-0 md:w-[60vw] md:text-start sm:pt-40'>
               <h1 className='font-bold text-4xl pb-2'>Hello Again!</h1>
               <h2 className='font-semibold text-3xl pb-2'>My Name is <span className='text-purple-500'>Louis Win</span></h2>
               <p className=''>I'm a web developer in training at West-Mec-Nec. I am a 2nd year student and I am currently learning backend web devleopment. We are learning the MERN stack. I have a huge interest in technology as well as other interest like Psychology and Film. I am the current Vice President of my FBLA chapter (2022-2023) and was the Treasurer last year (2021-2022). I am known to be quite energitic and personable, Thanks for reading!  </p>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className='font-semibold flex h-[50vh] w-[80vw] m-auto mb-10 bg-gray-100 flex-col justify-center items-center lg:text-3xl '>
            <h1 className='pb-10 font-bold text-4xl text-center '>My Social Media Links</h1>
            <div className='flex flex-col md:flex-row'>
              <a href="https://www.instagram.com/louiskyawwin/" className='inline-flex items-center space-x-2 py-2 rounded bg-pink-500 px-4 mx-1 text-white hover:bg-pink-700'>
                <img src="https://seeklogo.com/images/I/instagram-logo-041EABACE1-seeklogo.com.png" className='h-[3rem] w-[3rem]' alt="" />
                <span>Instagram</span>
              </a>
              <a href="https://github.com/lwin496" className='inline-flex items-center space-x-2 py-2 rounded bg-gray-800 px-4 mx-1 text-white hover:bg-gray-900'>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className='h-[3rem] w-[3rem]' alt="" />
                <span>Github</span>
              </a>
              <a href="https://www.linkedin.com/in/louis-win-235b221b8/" className='inline-flex items-center space-x-2 py-2 rounded bg-blue-400 px-4 mx-1 text-white hover:bg-blue-700'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" className='h-[3rem] w-[3rem]' alt="" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/" className='inline-flex items-center space-x-2 py-2 rounded bg-red-400 px-4 mx-1 text-white hover:bg-red-800'>
                <img src="https://i0.wp.com/www.worldmissioncentre.com/wp-content/uploads/icons/youtube-icon-flat-red-play-button-logo-vector.png?ssl=1" className='h-[3rem] w-[3rem]' alt="" />
                <span>Youtube</span>
              </a>
            </div>
         

  

          </div>  
        </div>
      </section>
  
  </div>
  </>
  )
}

export default About

          {/* <div className='w-[50%] bg-gray-100 flex justify-center items-center h-[100%]'>
             
            </div> */}
{/*          
          <div className='flex flex-col justify-center items-center m-auto bg-gray-100 h-[50vh] ' > */}
                {/* <div className='bg-zinc-200 p-10 rounded'>
                  <h1 className='text-center text-5xl'>Skills</h1>
                  <div className='m-auto'>
                    <h3>HTML</h3>
                    <div className="w-[30rem] bg-white rounded-full my-5">
                      <div class="bg-purple-900 text-xlg text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '85%'}}> 85%</div>
                    </div>
                  </div>

                  <div className='m-auto'>
                    <h3>CSS</h3>
                    <div className="w-[30rem] bg-white rounded-full my-5">
                      <div className="bg-purple-900 text-xlg text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '80%'}}> 80%</div>
                    </div>
                  </div>

                  <div className='m-auto'>
                    <h3>JS</h3>
                    <div className="w-[30rem] bg-white rounded-full my-5">
                      <div className="bg-purple-900 text-xlg font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '70%'}}> 70%</div>
                    </div>
                  </div>
                </div>   */}
            {/* </div>  */}

