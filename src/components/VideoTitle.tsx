import React from 'react'

const VideoTitle = ({title, overview}:any) => {
    console.log(title);
    console.log(overview)
  return (
    <div className='pt-36 px-36'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-xl'>
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