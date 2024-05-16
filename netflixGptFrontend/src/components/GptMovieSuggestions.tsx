import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {movieResults,movieNames}= useSelector((store:any)=>store.gpt);
  console.log("x");
  console.log(movieResults);
  console.log(movieNames);
  return (
    <div>
      {movieNames.map((movieName:any,index:any)=>(
        <MovieList
        key={movieName}
        title={movieName}
        movies={movieResults[index]}/>
      ))}
    </div>
  )
}

export default GptMovieSuggestions