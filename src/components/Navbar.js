import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isUserSignedIn = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav
      className="flex justify-around p-3 border-b border-blue-800 
    items-center bg-gray-600 text-zinc-400 text-lg"
    >
      <Link to="/">
        <h1 className="text-3xl">AuthDB</h1>
      </Link>
      <ul className="flex gap-4">
        {isUserSignedIn ? (
          <>
            <Link to="/account">
              <li>Account</li>
            </Link>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/signup">
              <li>SignUp</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
