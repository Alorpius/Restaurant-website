import React from 'react'
import {images} from '../../constants'
import './AboutUs.css'

  const About=()=>(
    <>
        <img src={images.spoon} alt='about Spoon' className='spoon__img'/>
             <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas culpa facilis dolor repellat quaerat perferendis obcaecati necessitatibus distinctio nihil. Unde nobis pariatur volupt</p>
            <button type='button' className='custom__button'>Know More</button>
    </>
  )

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex-center'>
        <img src={images.G} alt='Big G'/>
      </div>
      
      <div className='app__aboutus-content flex__center'> 
        <div className='app__aboutus-content_about'>
             <h1 className='headtext__cormorant'>About Us</h1>
             <About/>
        </div>
        <div className='app__aboutus-content_knife flex__center'>
           <img src={images.knife} alt='about_knife'/>
        </div>
        <div className='app__aboutus-content_history'>
             <h1 className='headtext__cormorant'>Our History</h1>
            <About/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
