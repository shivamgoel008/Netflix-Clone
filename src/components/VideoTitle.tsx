import React from 'react'

const VideoTitle = ({title, overview}:any) => {
    console.log(title);
    console.log(overview)
  return (
    <div className='w-screen aspect-video pt-[25%] px-36 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div>
        <button className='bg-white text-black p-4 px-12 text-xl rounded-xl hover:bg-opacity-70'>
         ▶️ Play
        </button>
        <button className='mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-xl'>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle