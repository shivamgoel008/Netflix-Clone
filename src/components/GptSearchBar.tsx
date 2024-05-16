import React, { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "../utils/openaiKey";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieNames, addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef<HTMLInputElement>(null);
  const dispatch= useDispatch();

  const searchMovieTMDB = async (movie: string):Promise<any> => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const url =
      "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text:
                  "Act as a movie recommendation system and suggest some movies for the query :" +
                  searchText?.current?.value +
                  ". Only give me names of 5 movies, comma seperated like the example result given ahead, Example: abc,def,ghi",
              },
            ],
          },
        ],
      }),
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log(data.candidates[0].content.parts[0].text);
      const gptMovies = data.candidates[0].content.parts[0].text.split(",");
      console.log(gptMovies);

      const promiseArray = gptMovies.map((movie: string) =>
        searchMovieTMDB(movie)
      );
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGptMovieResults(tmdbResults as any[] & void)); 
      dispatch(addGptMovieNames(gptMovies));
      console.log(tmdbResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-xl"
          placeholder="What would you like to watch today?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-500 text-white rounded-xl"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
