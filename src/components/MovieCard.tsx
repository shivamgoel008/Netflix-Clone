import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}:any) => {
  return (
    <div className='w-48 pr-4  '>
        <img
        className=' rounded-xl'
        alt='Movie Card' src={IMG_CDN+posterPath}
        />
    </div>
  )
}

export default MovieCard