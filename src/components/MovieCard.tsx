import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}:any) => {
  return (
    <div className='w-48 rounded-lg'>
        <img
        alt='Movie Card' src={IMG_CDN+posterPath}
        />
    </div>
  )
}

export default MovieCard