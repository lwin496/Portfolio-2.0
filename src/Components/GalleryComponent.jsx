// import React from 'react'

// export default GalleryComponent = ({images}) => {
//   console.log('images',images)
//   return (
//     <div>
//       <h1>GALLERY</h1>
//       <ul>
//         {images.map(image => { 
//           return ( 
//             <li key={image.id}> 
//               <a href={image.link}>
//                 <div>
//                   <Image width={image.width} height={image.height} src={image.image} />
//                   <h3>
//                     {image.title}
//                   </h3>
//                 </div>
//               </a>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }


// export async function getStaticProps() { 
//   const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,{ 
//     headers:{
//       Authorization:`Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`,
//     }
//   }).then(r = r.json())
//   console.log('results',results)

//   const {resources} = results

//   const images = resources.map(resource =>{
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

