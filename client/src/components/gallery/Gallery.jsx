import React from 'react'
import "./gallery.css"
import { IMAGES } from '../../data/images'
import ImageShadow from "react-image-shadow"
import "react-image-shadow/assets/index.css"



const Gallery = () => {
  return (
    <div className='gallery'>

        {IMAGES && IMAGES.map((image) => {
            return (
            <div key={image.id} className='singleImage'>

                <a href={image.image} target='_blank'>  
                    <ImageShadow className='image' src={image.image}/>
                </a>
                
                <h3 className='imageTitle'>{image.title}</h3>
                
                <p className='imageDesc'>{image.desc}</p>
            
            </div>
            ) 
        })}
    </div>
  )
}

export default Gallery