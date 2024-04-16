import React, { HtmlHTMLAttributes, useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    var message = checkValidate(email.current?.value as string, password.current?.value as string, name.current?.value as string)
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-48 mx-auto right-0 left-0 rounded-lg bg-opacity-75 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref = {name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg text-black"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg text-black"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-500 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
