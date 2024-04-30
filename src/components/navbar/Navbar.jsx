import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // navigate
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  // CartItems
  const cartItems = useSelector((state) => state.cart);

  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5">
      {/* Home */}
      <li className="hover:bg-green-900">
        <Link to={"/"}>Home</Link>
      </li>

      {/* All Product */}
      <li className="hover:bg-green-900">
        <Link to={"/allproduct"}>All</Link>
      </li>

      {/* living room */}
      <li className="hover:bg-green-900">
        <Link to={"/category/livingroom"}>Living Room</Link>
      </li>

      {/* chair */}
      <li className="hover:bg-green-900">
        <Link to={"/category/chair"}>Chair</Link>
      </li>

      {/* bed */}
      <li className="hover:bg-green-900">
        <Link to={"/category/bed"}>Bed</Link>
      </li>

      {/* Couch */}
      <li className="hover:bg-green-900">
        <Link to={"/category/couch"}>Couch</Link>
      </li>

      {/* Table */}
      <li className="hover:bg-green-900">
        <Link to={"/category/table"}>Table</Link>
      </li>

      {/* Table */}
      <li className="hover:bg-green-900">
        <Link to={"/category/similarwebsite"}>Similar Website</Link>
      </li>

      {/* Cart */}
      <li className="hover:bg-green-900">
        <Link to={"/cart"}>Cart({cartItems.length})</Link>
      </li>

      {/* Signup */}
      {!user ? (
        <li className="hover:bg-green-900">
          <Link to={"/signup"}>Signup</Link>
        </li>
      ) : (
        ""
      )}

      {/* Signup */}
      {!user ? (
        <li className="hover:bg-green-900">
          <Link to={"/login"}>Login</Link>
        </li>
      ) : (
        ""
      )}

      {/* User */}
      {user?.role === "user" && (
        <li className="hover:bg-green-900">
          <Link to={"/user-dashboard"}>User</Link>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li className="hover:bg-green-900">
          <Link to={"/admin-dashboard"}>Admin</Link>
        </li>
      )}

      {/* logout */}
      {user && (
        <li className="hover:bg-green-900 cursor-pointer" onClick={logout}>
          logout
        </li>
      )}
    </ul>
  );
  return (
    <nav className="bg-orange-900 sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center">
              Brown<span className="text-blue-gray-800">Wood</span>
            </h2>
          </Link>
        </div>
        {/* Search Bar  */}
        <SearchBar />

        {/* right  */}
        <div className="right flex justify-center items-center mb-4 lg:mb-0">
          {navList}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
