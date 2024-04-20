import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((appStore: any) => appStore.user);
  const navigate = useNavigate();
  function handleSignOut(): void {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error: any) => {
        navigate("/error");
      });
  }

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
