import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryConatiner from './SecondaryConatiner';
import usePopularMovies from '../hooks/useNowPopularMovies';
import useTopRatedMovies from '../hooks/useUpcomingMovies copy';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch = useSelector((store:any)=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      <Header/>
      {showGptSearch?(
        <GptSearch/>
      ):(
        <>
        <MainContainer/>
        <SecondaryConatiner/>
        </>
      )}
      
    </>
  )
}

export default Browse