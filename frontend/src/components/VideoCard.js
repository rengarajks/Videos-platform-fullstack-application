import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import ReactPlayer from 'react-player'



function VideoCard(props) {



  function moused(){
    
  }

  const videos = document.querySelectorAll('video');

  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play();
      
    });
    
    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  return (
    <div className='hover:scale-110   transition duration-200 '>

        <Link to={`/video/${props.video.id}`} >
        <div onMouseOver={moused} >
           
          {/* <ReactPlayer url={props.video.Video} height='50%'   width='100%'  /> */}
          <video src={props.video.Video}  width="750" height="500" ></video>
        
          </div>

          <div className='p-2 relative '>
          <div>
            <span className='font-medium text-blue-600'>{props.video.Title}</span>
          </div>

          

          <div className='text-gray-600 text-xs'>
          <div>
          <span>{props.video.creator}</span>
          </div>
            <span>{props.video.Views} Views  </span>
            <span> 2 years ago</span>
          </div>
          </div>
        </Link>
          
          

        </div>
  )
}

export default VideoCard