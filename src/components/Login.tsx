import React, { useState } from "react";
import Header from "./Header";
import { Sign } from "crypto";
const Login = () => {
    const [isSignInForm,setSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>

      <form className="p-12 w-3/12 absolute p-12 bg-black my-48 mx-auto right-0 left-0 rounded-lg bg-opacity-75 text-white">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>

        {!isSignInForm && (
            <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg"
            />
        )}
        
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg"
        />
        <button className="p-4 my-4 bg-red-500 w-full rounded-lg">
        {isSignInForm? "Sign In":"Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm? "New to netflix? Sign Up Now":"Already registered? Sign In Now"}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
