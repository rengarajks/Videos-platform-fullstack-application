import React from 'react'
import NavBar from './NavBar'
import ReactPlayer from 'react-player'
import { Avatar } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

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

          <div className='w-full '>


            

            







        <div className='flex justify-between'>
          <div className='flex items-center'> 

              <div><Avatar>Rs</Avatar></div>


               <div className='flex'>
                 <div > <span>Admin</span><p className='text-xs'>4 Subscribers</p>
                 </div>
                 
                 <div><button className='bg-red-600 text-xs p-1 rounded-md text-white'>Subscribe</button></div>
                 
                 </div>
                 </div>

                 
<div>

<div><span className='text-lg font-medium ml-16'>13,111</span></div>
<div>

</div>
<span className='p-2'><ThumbUpIcon/>171</span>
<span className='p-2'><ThumbDownIcon/>23</span></div>



        </div>








<div className='mt-4 flex justify-between border-b-2'>
  <div>
    

  <span className='p-2'><ThumbUpIcon/>Like</span>
<span className='p-2'><ThumbDownIcon/>Dislike</span>


  </div>

  <div>
    <span className='mx-12 font-bold'>About</span>
    <span className='mx-12'>Share</span>
    <span className='mx-12'>More</span>
  </div>
</div>


<span>1 year ago</span>


<p>
New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.
</p>

<div className='flex justify-center py-4'>
  <div>Restricted mode</div>
</div>

















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