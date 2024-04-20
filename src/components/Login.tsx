import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    var message = checkValidate(
      email.current?.value as string,
      password.current?.value as string,
      name.current?.value as string,
      isSignInForm
    );

    debugger;
    setErrorMessage(message);

    if (message !== "") return;

    if (isSignInForm) {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current?.value as string,
        password.current?.value as string
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error: any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

    if (!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current?.value as string,
        password.current?.value as string
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user,{
            displayName: name.current?.value,
            photoURL: "https://avatars.githubusercontent.com/u/55030452?v=4",
          }).then(()=>{
            dispatch(addUser(
              {
                uid: auth.currentUser?.uid,
                email: auth.currentUser?.email,
                displayName: auth.currentUser?.displayName,
                photoURL: auth.currentUser?.photoURL
              }
            ))
            navigate("/browse");
          }).catch((error)=>{
            setErrorMessage(error.message);
          });
          console.log(user);
          navigate("/browse");
        })
        .catch((error: any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg text-black"
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
