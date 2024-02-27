import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function VideoUpload() {


  const[file,setFile]=useState(null)
  const[title,setTitle]=useState()
  const[description,setDescription]=useState()
  const histroy=useNavigate()

  




   async function uploadfn(){
    let formfield=new FormData();

    formfield.append('Title',title)
    formfield.append('Video',file)
    formfield.append('Views',0)
    formfield.append('Likes',0)
    formfield.append('Dislikes',0)
    formfield.append('Description',description)
    formfield.append('creator',1)
    

    await axios({
      method:'post',
      url:'http://127.0.0.1:8000/api/video/',
      data:formfield
      
    }).then(response=>{
      console.log(response)
      histroy('/')
    })
  }
  






  return (












   
    <div className='flex'> 
    <div>
        
    <div className='mt-10 p-20 w-full   ml-80 mr-10  ' >
      
      <div className=''>
        <div>
          <span className=''>Select a video file to upload</span><br></br>
        
          <div className='py-10'>
          <input  type='file' onChange={(e)=>setFile(e.target.files[0])}/>
          </div>
        </div>


        <div>
          
        </div>
        
        <div>
        <input   value={title} type='text' onChange={(e)=>setTitle(e.target.value)} className='py-2 my-4 border w-full focus:outline-none focus:border-red-500  px-2 rounded-md' placeholder='Title'/>
        </div>

        <div>
          <textarea className='border w-full p-2 h-40 focus:outline-none focus:border-red-600 rounded-md' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description'/>
        </div>

        <div>
          <button onClick={uploadfn} className='bg-red-600 text-white rounded-md px-3 py-2 '>Upload</button>
        </div>


      </div>



      </div>


        
    </div>

    <div className='mt-10 p-20 w-full m-10 mt-20 ml-80 '>

      

      <video src={file} width="750" height="500" controls></video>


      
    </div>

    </div>





















    

















  )
}

export default VideoUpload