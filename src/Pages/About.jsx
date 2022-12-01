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
      <section className='page-wrap bg-[#301934] h-[100vh]  bg-no-repeat bg-cover' style={{backgroundImage:`url('https://res.cloudinary.com/duc4ngc5i/image/upload/v1669160739/Portfolio%202.0%20/orion-nebula-11107_f1zdoq.jpg')` }}>
            <div className='flex text-white flex-col'>
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