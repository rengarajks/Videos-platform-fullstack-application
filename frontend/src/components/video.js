import React from 'react'
import NavBar from './NavBar'
import ReactPlayer from 'react-player'
import { Avatar } from '@mui/material'

function Video() {
  return (

    <>
    <NavBar/>
    <div className=''>
      
      
     
      

      <div className='mt-14  justify-center mr-96' > 


      <ReactPlayer url='videos/Faded.mp4' controls={true} width='100%'/>





      <div className='p-2'>

        <h1 className='text-2xl'>Checkout my new video</h1>

        <div className='flex'>

          <div className='w-3/4 bg-red-200'>

            <div className='flex items-center'> 

              <div>
                <Avatar>Rs</Avatar>
              </div>

              <div > 
                <span>Admin</span>
                <br/>
                <button className='bg-red-600 text-xs p-1 rounded-md text-white'>Subscribe</button>
              </div>


            </div>


          </div>


          <div>

            Recommendationsss

          </div>
        </div>
      </div>        
      </div>
</div>


<div className='w-96 absolute right-0 top-0 mt-10 p-6'>

<div className='flex items-center'>
          
          <div className='w-1/2 '>
          <img className='rounded-md' src='https://images.pexels.com/photos/4040649/pexels-photo-4040649.jpeg?auto=compress&cs=tinysrgb&w=600s'/>
        
          </div>

         <div > 

         <div className='p-2'>
          <div>
            <span className='font-medium text-blue-600'>Checkout my new official video</span>
          </div>

          

          <div className='text-gray-600 text-xs'>
          <div>
          <span>Creator</span>
          </div>
            <span>2,334 Views  </span>
            <span> 2 years ago</span>
          </div>
          </div>
         </div>

        </div>





</div>
    </>

    
    
  )
}

export default Video