import React from 'react'
import { Link } from 'react-router-dom';


function Content() {
  return (
    <div className='mt-10  ml-72'>

      <div className='flex justify-center'><div>

          Home
          Trending  </div>
      </div>

      <div className='p-3 grid grid-cols-4 gap-4'>


        



      <Link to={'/video'}>

      <div className=''>
          
          <div>
          <img src='https://images.pexels.com/photos/4040649/pexels-photo-4040649.jpeg?auto=compress&cs=tinysrgb&w=600s'/>
        
          </div>

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
      
      </Link>








        



      </div>
   

    </div>
  )
}

export default Content