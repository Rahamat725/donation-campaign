import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
        

            <nav className="mt-10">
   
            <div className="navbar lg:shadow-md rounded-md">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1]    w-52">
        <li>
        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
        </li>
        <li>
        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
        </li>

        <li>
        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
        </li>
      </ul>
    </div>
 
    <div>
        <img src="https://i.ibb.co/K9hw33z/Logo.png" alt="" />
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <li>
      <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
      </li>
      <li>     <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Donation
                        </NavLink></li>
                        <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                        </li>
    </ul>
  </div>

</div>

            </nav>
        </div>
    );
};

export default Navbar;