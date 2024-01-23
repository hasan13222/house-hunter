import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();
  const [logoutMessage, setLogoutMessage] = useState("");

  const handleLogout = () => {
    axiosSecure.post("/logout", {}).then((res) => {
      if (res.data?.message) {
        setUser(null);
        setLogoutMessage(res.data.message);
        alert(logoutMessage);
      }
    });
  };
  return (
    <>
      <div className="container-fluid bg-yellow-50">
        <div className="container mx-auto">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a>Parent</a>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/owner-dashboard">Dashboard</a>
                  </li>
                </ul>
              </div>
              <a className="">
                <img id="logo" src="/logo.jpg" alt="logo" />
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a href="/owner-dashboard">Dashboard</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              {user && (
                <button onClick={handleLogout} className="btn btn-warning ml-3">
                  Logout
                </button>
              )}
              {!user && (
                <a href="/signup" className="btn btn-warning">
                  Signup
                </a>
              )}
              {!user && (
                <a href="/login" className="btn btn-warning ml-3">
                  Login
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
