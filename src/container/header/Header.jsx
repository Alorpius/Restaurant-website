import React from 'react'
import './Header.css'
import { images } from '../../constants'
import {Subheading} from '../../components'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
         <Subheading title='Chase the new flavor'/>
         <h1 className='app__header-h1'>The key to fine Dinning</h1>
         <p style={{margin:'2rem 0'}} className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui blanditiis porro officia alias, ex iusto! Magnam doloribus obcaecati, quam veniam totam non maxime iste nemo consequuntur voluptatibus nisi placeat!</p>
         <button type='button' className='custom__button'>Explore menu</button>
   </div>
   <div className='app__wrapper_img'>
           <img src={images.welcome} alt='welcome'/>
    </div>
   </div>
  )
}

export default Header
