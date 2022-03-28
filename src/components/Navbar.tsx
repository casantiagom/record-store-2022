import { Cart20Filled, Search20Filled } from "@fluentui/react-icons";
import { useContext, useState } from "react";
import DiscogsContext from "../data/DiscogsData";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  // @ts-ignore
  const { currentUser, logout } = useAuth();
  const { keyword, setKeyword } = useContext(DiscogsContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-peri-200 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-white text-xl tracking-tight">
            <Link to={"/"}>Record Store</Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"></button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm text-white lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Browse
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div className="lg:flex-grow text-black border-white content-center">
            <Search20Filled className="text-white" />

            <input
              className="w-96 color"
              value={keyword[0]}
              onChange={(e) => setKeyword([e.target.value])}
              placeholder="Search"
            ></input>
          </div>
          <div>
            <Link
              onClick={handleLogout}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-peri-300 hover:bg-white mt-4 lg:mt-0 mr-6"
              to={""}
            >
              Log Out
            </Link>
            <Link
              to="/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-peri-300 hover:bg-white mt-4 lg:mt-0 mr-6"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-peri-300 hover:bg-white mt-4 lg:mt-0 mr-6"
            >
              Sign Up
            </Link>
            <Link
              to="/cart"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-peri-300 hover:bg-white mt-4 lg:mt-0"
            >
              <Cart20Filled />
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
  //console.log(keyword);
};

export default Navbar;
