import React, { useState } from 'react'


function VideoUpload() {


  const[file,setFile]=useState()
  const[title,setTitle]=useState()
  const[description,setDescription]=useState()

  

 



  async function uploadfn(){
    let formfield=new FormData();

    formfield.append('title',title)
    formfield.append('file',file)
    formfield.append('description',description)
    
  }






  return (
    <div className='mt-10  ml-80 mr-10 ' >
      
      <div className=''>
        <div>
        <input value={file} type='file' onChange={(e)=>setFile(e.target.value)}/>
        </div>
        
        <div>
        <input  value={title} type='text' onChange={(e)=>setTitle(e.target.value)} className='border-2 px-2 rounded-md' placeholder='Title'/>
        </div>

        <div>
          <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='border-2' placeholder='Description'/>
        </div>

        <div>
          <button onClick={uploadfn} className='bg-red-600 rounded-md px-2 '>Upload</button>
        </div>


      </div>

      </div>
  )
}

export default VideoUpload