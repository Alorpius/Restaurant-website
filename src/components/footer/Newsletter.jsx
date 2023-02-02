import React from 'react'
import Subheading from '../subHeading/Subheading'
import './Newsletter.css' 

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
         <Subheading title='Newsletter'/>
         <h1 className='headtext__cormorant'>Subscribe to Our newsletter</h1>
         <p className='p__opensans'>Never miss newsletter update</p>
      </div>
      <div className='app__newsletter-input flex__center'>
          <input type='email' placeholder='Enter your e-mail address'/>
          <button type='button' className='custom__button'>subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
