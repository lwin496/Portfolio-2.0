import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../Imgs/planet.jpg'

const Contact = () => {
  return (
    <div className='bg-[#301934] h-screen'>
      <div className='outer-container'>
        <section id='page-wrap'>
        <Navbar />
          <div className='w-[70vw] h-[80vh] bg-zinc-200 m-auto my-[10vh] shadow-2xl shadow-blue-300/100 flex col'>

            <div className='w-[100%] flex'>
              <img src={img} alt="planet img"  className='w-[85%]'/>
            </div>
            
            <div className='w-[100%]'>
              <h1 className=' text-6xl mt-[15%] mb-0'>Contact Me</h1>
              <form action="" className='mt-[5%] flex flex-col w-[85%]'>
                <div className='flex justify-evenly w-[85%]'>
                  <h3>First Name</h3>
                  <h3>Last Name</h3>
                </div>
                <div className='flex justify-between w-[85%]'>
                  <input type="text" className='mx-1' />
                  <input type="text" />
                </div>
                <div className='flex flex-col'>
                  <h3>Email</h3>
                  <input type="email" name="" id="" className='w-[50%]' />
                  <h3>Message</h3>
                  <textarea name="" id="" cols="30" rows="10" className='w-[85%]'></textarea>
                </div>
                <input type="submit" value=" submit" />
              </form>

            </div>
          </div>
        </section>
        </div>
        
    </div>
  )
}

export default Contact
