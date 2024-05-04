import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryConatiner = () => {
  const movies = useSelector((store:any)=>store.movies);
  return (
    <div className=' bg-gray-950'>
      <div className=' -mt-40 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryConatiner