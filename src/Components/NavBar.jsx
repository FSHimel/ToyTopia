import { Link, NavLink } from "react-router";
import user from "../assets/user.png";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/my-profile"}>My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-linear-to-r from-[#ccfff5] to-[#f2ffcc] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-2xl font-bold text-[#8C001A]">
          ToyTopia
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-5">
        <img src={user} alt="" className="h-10" />

        <Link to={"/login"} className="btn bg-[#99ddff]">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
