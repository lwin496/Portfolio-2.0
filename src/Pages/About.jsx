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
        <div className='h-[55vh] bg-slate-500 flex flex-col justify-center items-center'>
          <div className="video-docker absolute top-0 left-0 w-full h-[65vh] overflow-hidden">
              <video className="min-w-full min-h-full absolute object-cover" src={video} type="video/mp4" autoPlay muted loop></video>
          </div>
          <div className='video-content pt-12'>
              <div className='flex flex-col items-center'>
                <h1 className='font-bold text-[5rem] text-white'>ABOUT ME</h1>
                <button className='bg-purple-800 text-2xl p-3 text-white'>RESUME</button>
              </div>
          </div>
       
        
       
        </div>
        <div className='h-[100vh] bg-slate-600 flex flex-row'>
        {/* <img src={KeyboardNormal} alt="picture of louis" className='w-72 h-72 rounded ' /> */}
          {/* <p className='font-normal text-xl w-[60%] tracking-wide'>Hello! I'm a web developer in training at West-Mec-Nec. I am a 2nd year student and I am currently learning backend web devleopment. We are learning the MERN stack. I have a huge interest in technology as well as other interest like Psychology and Film. I am the current Vice President of my FBLA chapter (2022-2023) and was the Treasurer last year (2021-2022). I am known to be quite energitic and personable, Thanks for reading!  </p>
          <div className='mt-5 font-semibold text-3xl'>
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
          </div>  */}
        </div>
      </section>
  
  </div>
  </>
  )
}

export default About


{/* 
                  <div className='w-[10rem] h-[10rem]'>
                    <a href="#" className=''>
                      <img src={githubIcon} alt="mygithub" className='' />
                    </a>
                    <a href="#" className=''>
                      <img src={linkedinIcon} alt="mylinkedIn" className='' />
                    </a>
                    <a href="#" className=''>
                      <img src={instagramIcon} alt="myInstagram" className='' />
                    </a>
                    <a href="#" className=''>
                      <img src={youtubeIcon} alt="myYoutubeicon" className='' />
                    </a>
                  </div>  */}


     {/* <div className='flex text-white flex-col'>
                <h1 className='text-7xl m-auto mt-[5vh] mb-[0rem] font-bold'>ABOUT <span className='text-purple-400'>ME</span></h1>    
                <div className='w-[25%] h-[.5rem] bg-white m-auto'></div>  
                <div className='flex flex-col'>
            </div>
            <div className='grid grid-cols-2'>
             <img src={Louis} alt="louis" className='m-auto' />
             <div className='bg-gray-800 rounded-xl m-[2rem] bg-opacity-80  '>
             <div className='w-[90%] m-auto pt-10'>
                <h1 className='text-5xl font-bold pb-5'>Hello!</h1> 
                <h3 className='text-xl'>Once Again, my name is Louis Win. I'm a West-Mec-Nec Year 2 Coding student, Also I am known to be accentric and quite lively. My strengths are my communications skills along with my knowlege about business and technology. I am currently the Vice President of my FBLA chapter 2022-2023 and was the Treasurer for the last year 2021-2022  </h3>   
                
                <div>

                </div>
   
                <div className='flex h-[50%] w-[50%]'>
                  <a href="#">
                    <img src={githubIcon} alt="githublink" />
                  </a>
                  <a href="#">
                    <img src={linkedinIcon} alt="linkedinicon" />
                  </a>
                  <a href="#">
                    <img src={instagramIcon} alt="instagramicon" />
                  </a>
                  <a href="#">
                    <img src={youtubeIcon} alt="youtubeicon" />
                  </a>
             </div>
              

                </div> 
              
             </div>
            </div>
             
      
            </div> */}


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