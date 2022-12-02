import React from 'react'
import { useState } from 'react'
import Projects from '../Projects'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {

      const [current, setCurrent] = useState(0)
      const length = slides.length
      
      const nextSlide = () => { 
            setCurrent(current === length - 1 ? 0 : current + 1)
      }

      const prevSlide = () => { 
            setCurrent(current === 0 ? length - 1 : current - 1)
      }

      console.log(current)

      if(!Array.isArray(slides) || slides.length <= 0){ 
            return null 
      }

return (
      <div className=''>
            <FaArrowAltCircleLeft className='absolute top-[50%] left-[32px] text-5xl text-white cursor-pointer z-30 select-none' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='absolute top-[50%] right-[32px] text-5xl text-white cursor-pointer z-30 select-none' onClick={nextSlide}/>
            {Projects.map((slide, index) => { 
                  return( 
                        <div className={index === current ? 'slide active' : 'slide'} key={slide.id}>
                              {index === current && ( 
                              <div className='text-white transition'> 
                                    <img src={slide.image} alt={slide.title} className='opacity-50 h-[100vh] w-[100vw]' />
                                    <h3 className='absolute text-7xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-2rem]'>{slide.title}</h3>
                                    <h3 className='absolute text-2xl semi-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[3rem] text-center'>{slide.description}</h3>
                                    <a href={slide.link} className='absolute text-2xl semi-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[8rem] bg-purple-800 p-2 font-semibold hover:bg-green-500'>Go to Page</a>
                              </div>
                             
                              )}
                              
                        </div>
                  )
                 
            })}
      </div>
  )
}

export default ImageSlider
