// import React from 'react'

// export default GalleryComponent = () => {
//   return (
//     <div>
//       <ul> 
//         {images.map(image => { 
//           return ( 
//             <li key={image.id}>
//               <a href={image.link}>
//                 <div>
//                   <Image width={image.width} height={image.height} src={image.src} />
//                 </div>
//                 <h3>
//                   {image.title}
//                 </h3>
//               </a>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// export async function getStaticProps() { 
//   const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, { 
//     headers: { 
//       Authorization: `Basic ${(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
//     } 
//   }).then(r => r.json())
//   console.log('results', results)
//   return { 
//     props:{ 

//     }
//   }
// }

