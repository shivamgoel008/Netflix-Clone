import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryConatiner = () => {
  const movies = useSelector((store:any)=>store.movies);
  return (
    <div className=' bg-gray-950'>
      <div className=' -mt-40 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryConatiner