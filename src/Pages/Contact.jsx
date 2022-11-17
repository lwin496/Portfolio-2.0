import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../Imgs/planet.jpg'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

// const env = require('dotenv')

const Contact = () => {
  console.log( process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_PUBLIC_KEY)
  
  const serviceID = process.env.REACT_APP_SERICE_ID
  const templateID = process.env.REACT_APP_TEMPLATE_ID 
  const publicKEY = process.env.REACT_APP_PUBLIC_KEY

  const form = useRef()

  const handleOnSubmitSendEmail = (e) => { 
    e.preventDefault()

    emailjs.sendForm(serviceID,
      templateID,
      form.current,
      publicKEY,
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
        <Navbar />
          <div className='w-[70vw] h-[80vh] bg-zinc-200 m-auto my-[10vh] shadow-2xl shadow-blue-300/100 flex col'>

            <div className='w-[100%] flex'>
              <img src={img} alt="planet img"  className='w-[85%]'/>
            </div>
            
            <div className='w-[100%]'>
              <h1 className=' text-6xl mt-[15%] mb-0 font-bold text-purple-900'>Contact Me!</h1>

              <form ref={form} onSubmit={handleOnSubmitSendEmail} className='mt-[5%] flex flex-col'>
                <div className='flex justify-between mr-[10%]'> 
                  <div className='flex flex-col w-[45%]'>
                      <h3 className='text-2xl'>First Name</h3>
                      <input type="text" placeholder='First Name' name='user_name' className='py-1' required />
                  </div>
                  <div className='flex flex-col w-[45%]'>
                      <h3 className='text-2xl'>Last Name</h3>
                      <input type="text" placeholder='Last Name' name='user_name'  className='py-1'  required />
                  </div>
                </div>
        
                <div className='flex flex-col'>
                  <h3 className=' text-2xl'>Email</h3>
                  <input type="email" name="user_email" className='mr-[10%] py-1' placeholder='Email' required />
                  <h3 className='text-2xl '>Message</h3>
                  <textarea name="message" id="" cols="30" rows="10" className='mr-[10%] resize-none ' required></textarea>
                  <input type="submit" value="Send" className=' bg-[#FFA500] mr-[10%] py-2 justify-center mt-5' />
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


