import React from 'react'
import './Chef.css'
import {images} from '../../constants'
import {Subheading} from '../../components'

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
      </div>
      <div className='app__wrapper_info'>
        <Subheading title='Chef World'/>
        <h1 className='headtext__cormorant'>What We Believe In</h1>
        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote'/>
             <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam nesciunt itaque, quo eum, explicabo dolorem hic exercitationem rerum id a laborum odio autem ab atque sapiente laudantium alias repellendus doloribus.</p>
        </div>
        <div className='app__chef-sign'>
          <p>Alor Pius</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='sign'/>
        </div>
      </div>
    </div>
  )
}

export default Chef
