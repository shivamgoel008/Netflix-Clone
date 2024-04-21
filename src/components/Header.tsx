import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { DEFAULT_AVATAR, LOGO } from "../utils/constants";

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
          src={LOGO}
          alt="logo"
        />

        <div className="flex p-4">
          <img
            className="w-12 h-12 m-2 rounded-lg"
            src={
              user?.photoURL == null
                ? DEFAULT_AVATAR
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
