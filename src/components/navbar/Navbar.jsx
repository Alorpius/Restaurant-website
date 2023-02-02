import React from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdDvr, MdOutlineRestaurantMenu} from 'react-icons/md'
import Images from '../../constants/images'
import { useState } from 'react'

const Menu=()=>(
  <>
  <li className='p__opensans'><a href='#home'>Home</a></li>
  <li className='p__opensans' ><a href='#about'>About</a></li>
  <li className='p__opensans' ><a href='#menu'>Menu</a></li>
  <li className='p__opensans' ><a href='#awards'>Awards</a></li>
  <li className='p__opensans' ><a href='#contacts'>Contacts</a></li>
  </>
 
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={Images.gericht} alt='Navbar logo'/>
      </div>
      <ul className='app__navbar-links'>
       <Menu/>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Log in / Register</a>
        <div/>
        <a href='/' className='p__opensans'>Book table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#ffff' fontSize={27} onClick={()=>setToggleMenu(true)}/>
          
          {toggleMenu && (
              <div className='app__navbar-smallscreen_overlay flex_center slide-bottom'>
              <MdOutlineRestaurantMenu color='#ffff' fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
               <ul className='app__navbar-smallscreen_links'>
                 <Menu/>
              </ul>
             </div>
          )}       
      
      
      </div>
    </nav>
  )
}

export default Navbar
