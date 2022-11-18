import React from 'react'
import Navbar from '../Components/Navbar'
// // import GalleryComponent from '../Components/GalleryComponent'

// const Gallery = () => {
//   return (
    // <>
    //   <div className='outer-container'>
    //     <Navbar pageWrapId={"page-wrap"} OuterContainerId={"outer-container"} />
    //     <section className='page-wrap bg-[#301934] h-[100vh]'>
    //       <div className='flex justify-center align-middle text-white'>
    //           <h1>Gallery</h1>
            
    //       </div>
    //     </section>
    //   </div>
    // </>
//   )
// }

// export default Gallery




const Gallery = () => {
  // console.log('images',images)
  return (
    // <div>
    //   <h1>GALLERY</h1>
    //   <ul>
    //     {images.map(image => { 
    //       return ( 
    //         <li key={image.id}> 
    //           <a href={image.link}>
    //             <div>
    //               <img width={image.width} height={image.height} src={image.image} />
    //               <h3>
    //                 {image.title}
    //               </h3>
    //             </div>
    //           </a>
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </div>
    <>
      <div className='outer-container'>
        <Navbar pageWrapId={"page-wrap"} OuterContainerId={"outer-container"} />
        <section className='page-wrap bg-[#301934] h-[100vh]'>
          <div className='flex justify-center align-middle text-white'>
              <h1>Gallery</h1>
            
          </div>
        </section>
      </div>
    </>
    
  )
}


// export async function getStaticProps() { 
//   const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,{ 
//     headers:{
//       Authorization:`Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`,
//     }
//   }).then(r => r.json())
//   console.log('results',results)  

//   const {resources} = results

//   const images = resources.map(resource =>{
//     const {width, height} = resource
//     return { 
//       id: resource.asset.id,
//       title: resource.public_id, 
//       image : resource.secure_url, 
//       width,
//       height
//     }
//   })

//   return { 
//     props:{ 
//       images
//     }
//   }
// }


export default Gallery 