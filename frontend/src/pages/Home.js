import React from 'react'
import NavBar from '../components/NavBar'
import Content from './Content'
import SideBar from './SideBar'

function Home() {
  return (
    <div className='text-gray-800'>
        
        <NavBar/>


        <Content/>

        <SideBar/>
        
        </div>
  )
}

export default Home