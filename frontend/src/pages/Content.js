import React, { useState } from 'react'
import axios from 'axios';

import VideoCard from '../components/VideoCard';


function Content() {

  const[videoPost,setVideoPost]=useState()
  axios.get('http://127.0.0.1:8000/api/video/').then(
    response=>{
      setVideoPost(response.data)
      // console.log(videoPost)
      
    }
  )

  

  return (
    <div className='mt-10  ml-80 mr-10'>

      <div className='flex justify-center'><div>

          
          <span className='font-bold text-red-600 mr-1'>Home</span>
          <span>Trending</span>
            </div>
      </div>

      <div className='p-3 grid grid-cols-4 gap-5'>


        


    {
      videoPost && videoPost.map((video)=>(
        <VideoCard video={video}/>

      ))
    }
      

      
      
      
     








        



      </div>
   

    </div>
  )
}

export default Content