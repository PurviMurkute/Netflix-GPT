import { useState } from "react";
import netflixlogo from "./../assets/netflixlogo.png";
import LoginModal from "./LoginModal";

const Header = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [isSignInOpen, setSignInOpen] = useState(true);

  const toggleSignInForm = () => {
    setSignInOpen(!isSignInOpen);
  };

  return (
    <div className="px-5 py-1 bg-gradient-to-b from-black relative z-10">
      <img src={netflixlogo} alt="logo" className="w-[180px]" />
      <button
        className="text-white fixed top-6 right-5 font-medium text-lg cursor-pointer"
        onClick={() => {
          setIsModelOpen(true);
        }}
      >
        Login
      </button>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModelOpen(false);
        }}
      >
        <form>
          <h1 className="text-center font-bold text-white py-3">
            {isSignInOpen ? "Sign In" : "Sign Up"}
          </h1>
          { isSignInOpen? " ":
            <input
              type="text"
              placeholder="Full Name"
              className="w-80 block mx-auto p-2 my-4 bg-gray-700"
            />
          }
          <input
            type="text"
            placeholder="Email Address"
            className="w-80 block mx-auto p-2 my-4 bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-80 block mx-auto p-2 my-5 bg-gray-700"
          />
          <button className="bg-red-700 text-white font-bold block mx-auto px-4 py-1 mt-4 mb-7 cursor-pointer">
            {isSignInOpen? "Sign In" : "Sign Up"}
          </button>
          <h3
            className="text-white font-medium p-2 text-center cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInOpen? "New to Netflix? Sign Up Now" : "Already have an account? Sign In Now"}
          </h3>
        </form>
      </LoginModal>
    </div>
  );
};

export default Header;
