import React from 'react'
import {images} from '../../constants'
import {Subheading} from '../../components'
import './FindUs.css'

const FindUs = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='contacts'>
      <div className='app__wrapper_info'>
         <Subheading title='CONTACT US'/>
         <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>find Us</h1>
         <div className='app__wrapper-content'>
           <p className='p__opensans'> Adewale Crescent Off badore road Ajah lagos</p>
           <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
           <p className='p__cormorant'>Mon-Fri: 10am-04pm</p>
           <p className='p__cormorant'>sat-sun: 01pm-03pm</p>
         </div>
         <button type='button' className='custom__button' style={{marginTop:'2rem'}}>visit us</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.findus} alt='findus'/>

      </div>
    </div>
  )
}

export default FindUs
