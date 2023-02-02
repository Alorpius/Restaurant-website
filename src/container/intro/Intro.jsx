import {meal} from '../../constants'
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import './Intro.css'
import { useState } from 'react'

import React from 'react'

const Intro = () => {
const vidRef=React.useRef();
const [playVideo, setPlayVideo]=useState(false);

const handleVideo=()=>{
  setPlayVideo(!playVideo)
  if(playVideo){
    vidRef.current.pause()
  }else{
    vidRef.current.play()
  }
}
   
  return (
    <div className='app__video'>
      <video
      src={meal}
      loop
      ref={vidRef}
      type='video/mp4'
      control='false'
      muted
      />
      <div className='app__video-overlay flex__center' onClick={handleVideo}>
        <div className='app__video-overlay_circle flex__center'>
          {playVideo 
          ? (
            <BsPauseFill color='white' fontSize={27}/>
          ) 
          : (
            <BsFillPlayFill color='white' fontSize={27}/>
          )}
        </div>

      </div>
    </div>
  )
}

export default Intro




