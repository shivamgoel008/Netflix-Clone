import openai from '../utils/openai';
import React, { useRef } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";

const   GptSearchBar = () => {
  const searchText = useRef<HTMLInputElement>(null);

  const handleGptSearchClick = async ()=> {
    console.log(searchText?.current?.value )
    const result = await openai.chat.completions.create({
      messages: [{ role: 'user', content: searchText?.current?.value as string }],
      model: 'gpt-3.5-turbo',
    });
    console.log(result.choices);
  }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input
               ref={searchText}
               type='text'
               className='p-4 m-4 col-span-9 rounded-xl'
               placeholder='What would you like to watch today?'
            />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-500 text-white rounded-xl' onClick={handleGptSearchClick}>
                Search
            </button>

        </form>

    </div>
  )
}

export default GptSearchBar