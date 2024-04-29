import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

interface Movie {
    original_title: string;
    overview: string;
  }

const MainContainer: React.FC = () => {
  const movies = useSelector((store: any) => store?.movies?.nowPlayingMovies);
  if(movies===null)
    return <></>; // early return 
  const mainMovies = movies[0];
  console.log(mainMovies)
  return (
    <div>
      <VideoTitle title={mainMovies?.original_title}  overview={mainMovies.overview}/>
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
