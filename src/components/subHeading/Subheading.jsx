
import React from 'react'
import './Subheading.css';
import {images} from '../../constants'


const Subheading = ({title}) => {
  return (
    <div style={{marginBottom:'1rem'}}>
       <p className='p__cormorant'>{title}</p>
       <img src={images.spoon} alt='spoon' className='spoon_img'/>
    </div>
  )
}

export default Subheading
