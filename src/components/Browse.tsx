import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryConatiner from './SecondaryConatiner';
import usePopularMovies from '../hooks/useNowPopularMovies';
import useTopRatedMovies from '../hooks/useUpcomingMovies copy';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryConatiner/>
    </div>
  )
}

export default Browse