import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WatchLaterIcon from '@mui/icons-material/WatchLater';


import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';


import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function SideBar() {
  return (
    <div className='flex-col font-medium w-72 fixed left-0 top-9 border-r-2 '>
        
        <div className='border-b-2 '>
            
            <div className='p-2 hover:bg-red-600 rounded-md'>
            <button className=''>
            <HomeIcon/>
            <span className='m-2'>Home</span>
            </button>
            </div>


            <div className='p-2 hover:bg-red-600 rounded-md'>
            <button className=''>
            <LocalFireDepartmentIcon/>
            <span>Trending</span>
            </button>
            </div>


            <div className='p-2 hover:bg-red-600 rounded-md'>
            <button className=''>
            <WatchLaterIcon/>
            <span>History</span>
            </button>
            </div>


        </div>
      

        <div className='border-b-2'>

            <div className='text-red-600 m-2 '>Best of youtube</div>

            <div className='p-2 hover:bg-red-600 rounded-md'>
            <button className=''>
            <AudiotrackIcon/>
            <span>Music</span>
            </button>
            </div>

            <div className='p-2 hover:bg-red-600 rounded-md'>
            <button className=''>
            <SportsBasketballIcon/>
            <span>Sports</span>
            </button>
            </div>



            <div className='p-2 hover:bg-red-600 rounded-md'>
            <button className=''>
            <SportsEsportsIcon/>
            <span>Gaming</span>
            </button>
            </div>


            <div className='p-2 hover:bg-red-600 rounded-md'>
            <button className=''>
            <TheaterComedyIcon/>
            <span>TV Shows</span>
            </button>
            </div>


            <div className='p-2 hover:bg-red-600 rounded-md'> 
            <button className=''>
            <LocalMoviesIcon/>
            <span>Movies</span>
            </button>
            </div>


            <div className='p-2 hover:bg-red-600 rounded-md'>
            <button className=''>
            <LiveTvIcon/>
            <span>Live</span>
            </button>
            </div>




            <div className='p-2 hover:bg-red-600 rounded-md'>
            <button className=''>
            <NewspaperIcon/>
            <span>News</span>
            </button>
            </div>

        </div>

        <div>
            Browse channels

            <div>
            <button>
                <AddCircleOutlineIcon/>
            </button>
            </div>
        </div>
        
        
        </div>
  )
}

export default SideBar