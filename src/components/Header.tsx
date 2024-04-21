import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((appStore: any) => appStore.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSignOut(): void {
    signOut(auth)
      .then(() => {
      })
      .catch((error: any) => {
        navigate("/error");
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser(""));
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <div className="w-full absolute px-48 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        <div className="flex p-4">
          <img
            className="w-12 h-12 m-2 rounded-lg"
            src={
              user?.photoURL == null
                ? "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                : user.photoURL
            }
            alt="user logo"
          />

          <button onClick={handleSignOut} className="text-white">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

