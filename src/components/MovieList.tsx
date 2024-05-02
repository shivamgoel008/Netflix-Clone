import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }: any) => {
    console.log(movies)
  return (
    <div className="flex overflow-x-scroll">
      <h1>{title}</h1>
      <div className="flex">
        {movies.map((movie:any)=><MovieCard key ={movie.id}  posterPath={movie.poster_path}/>)}
      </div>
    </div>
  );
};

export default MovieList;
