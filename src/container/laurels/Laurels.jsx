import React from 'react'
import './Laurels.css'
import {Subheading} from '../../components'
import {data,images} from '../../constants'

const AwardCards=({award:{imgUrl,subtitle,title}})=>(
  <div className='app__laurels_awards-card'>
       <img src={imgUrl} alt='image'/>
       <div className='app__laurels_awards-card_content'>
       <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
       <p className='p__cormorant'>{subtitle}</p>
       </div>
  </div>
)

const Laurels = () => { 
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className='app__wrapper_info'>
         <Subheading title='Awards & Recognition'/>
         <h1 className='headtext__cormorant'> Our Laurels</h1>
         <div className='app__laurels_awards'>
            {data.awards.map((award)=> 
            <AwardCards key={award.id} award={award}/>)}
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt='laurels'/>
      </div>
    </div>
  )
}

export default Laurels
