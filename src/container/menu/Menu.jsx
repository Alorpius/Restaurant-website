import React from 'react'
import './Menu.css'
import {images,data} from '../../constants'
import {Subheading, Menuitem} from '../../components'

const Menu = () => {
  return (
    <div className='app__menu flex__center section__padding' id='menu'>
      <div className='app__menu-title'>
        <Subheading title='menu that fits your palette'/>
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>
      <div className='app__menu-menu'>
         <div className='app__menu-menu_wine flex__center'>
            <p className='app__menu-menu_heading'>Wine & Beer</p>
            <div className='app__menu-menu_items'>
                {data.wines.map((wine)=>(
                 <Menuitem key={wine.id} title={wine.title} price={wine.Price} tags={wine.tags}/>
                 ))}
            </div>
            </div>
            <div className='app__menu-menu_img'>
              <img src={images.menu} alt='menu_img'/>
            </div>

            <div className='app__menu-menu_cocktail flex__center'>
                  <p className='app__menu-menu_heading'>Cocktails</p>
            <div className='app__menu-menu_items'>
              {data.cocktails.map((cocktail)=>(
                <Menuitem key={cocktail.id} title={cocktail.title} price={cocktail.Price} tags={cocktail.tags}/>
              ))}
            </div>
            </div>
         </div>
         <div style={{marginTop:'15px'}}>
              <button type='button' className='custom__button'>View More</button>
        </div>
      </div>
    
  )
}

export default Menu
