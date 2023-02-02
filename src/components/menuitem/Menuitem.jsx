import React from 'react'
import './Menuitem.css'

const Menuitem = ({title,tags,price}) => {
  return (
    <div className='app__menuitem'>
      <div className='app__menuitem-header'>
        <div className='app__menuitem-name'>
          <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
        </div>

          <div className='app__menuitem-dash'/>

        <div className='app__menuitem-price'>
          <p className='p__cormorant' >{price}</p>
        </div>
      </div>
      <div className='app__menuitem-sub'>
        <p className='p__opensans' style={{color:'#AAA'}}>{tags}</p>
      </div>
    </div>
  )
}

export default Menuitem
