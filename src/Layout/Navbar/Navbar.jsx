import { Link } from "react-router-dom";

const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/allproperties">All Properties</Link></li>
    <li><Link to="/allproperties">About Us</Link></li>
    <li><Link to="/allproperties">Contact Us</Link></li>
    
    
           
      
</>
const Navbar = () => {
    return (
        <div className=" min-w-full items-center ">
            <div className="navbar  bg-gray-200 text-green-600 font-bold">
  <div className="navbar-start max-w-screen-xl">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className=" text-xl text-green-600 shadow-blue-200">HouseHunter</a>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-green-500 text-white p-2 font-bold border-b-2 shadow-lg shadow-blue-300">Register or Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;