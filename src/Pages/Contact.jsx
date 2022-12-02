import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../Imgs/planet.jpg'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

// const env = require('dotenv')

const Contact = () => {
  
  const form = useRef()

  const handleOnSubmitSendEmail = (e) => { 
    e.preventDefault()

    emailjs.sendForm('service_p4k60x8',
      'template_fiip0pl',
      form.current,
      'tUI_jFwWHFBORGwsH',
      ).then((result) => { 
        console.log(result.text)
        console.log("message sent")
        e.target.reset()
      }, (error) => { 
        console.log(error.text)
      })
  
  }


  return (
    <div className='bg-[#301934] h-screen'>
      <div className='outer-container'>
        <section id='page-wrap'>
        <Navbar pageWrapId={"page-wrap"} OuterContainerId={"outer-container"} />
          <div className='w-[70vw] h-[80vh] bg-zinc-200 m-auto my-[10vh] shadow-2xl shadow-blue-300/100 flex col'>
            {/* section 1 */}
            <div className='w-[0%] flex lg:w-[40%]'>
              <img src={img} alt="planet img"  className='w-[100%]'/>
            </div>
            {/* section 2 */}
            <div className='w-[100%] px-[10%] h-[100%] overflow-visible lg:w-[60%]'>
              <h1 className=' text-4xl mt-[15%] mb-0 font-bold text-purple-900 md:text-5xl'>Contact Me!</h1>

              <form ref={form} onSubmit={handleOnSubmitSendEmail} className='mt-[5%] flex flex-col'>
                <div className='flex flex-col md:flex sm:flex-row justify-between'> 
                  <div className='flex flex-col w-[100%] sm:w-[45%]'>
                      <h3 className='text-xl md:text-2xl'>First Name</h3>
                      <input type="text" placeholder='First Name' name='user_name' className='py-1' required />
                  </div>
                  <div className='flex flex-col w-[100%] sm:w-[45%]'>
                      <h3 className='text-xl md:text-2xl'>Last Name</h3>
                      <input type="text" placeholder='Last Name' name='user_name'  className='py-1'  required />
                  </div>
                </div>
        
                <div className='flex flex-col'>
                  <h3 className='text-xl md:text-2xl'>Email</h3>
                  <input type="email" name="user_email" className=' py-1' placeholder='Email' required />
                  <h3 className='text-xl md:text-2xl'>Message</h3>
                  <textarea name="message" id="" cols="30" rows="10" className='resize-none ' required></textarea>
                  <input type="submit" value="Send" className=' bg-green-500 py-2 justify-center mt-5 hover:bg-green-600' />
                </div>
                
              </form>

            </div>
          </div>
        </section>
        </div>
        
    </div>
  )
}

export default Contact


