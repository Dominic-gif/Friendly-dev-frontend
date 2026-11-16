import { useState } from "react";
import { NavLink } from "react-router";
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const active = "transition hover:text-blue-700 duration-300 text-blue-400";
    const base = "text-gray-300";
  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <NavLink to="/" className="text-blue-300 text-lg font-bold flex items-center gap-2">
          <FaLaptopCode className="text-blue-400 text-xl" />
         <span className="text-blue-400">The Friendly Developer</span> 
        </NavLink>
        
        { /* Desktop Navigation */ }
        <div className="hidden md:flex items-center gap-6">
            <div className="space-x-4 text-sm text-gray-300">
                <NavLink className={({isActive}) => isActive ? active : base} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? active : base} to='/projects'>Projects</NavLink>
                <NavLink className={({isActive}) => isActive ? active : base} to='/blog'>Blog</NavLink>
                <NavLink className={({isActive}) => isActive ? active : base} to='/about'>About</NavLink>
                <NavLink className={({isActive}) => isActive ? active : base} to='/contact'>
                    Contact
                </NavLink>
            </div>
        </div>
        
        <div className="md:hidden flex items-center gap-4">
            <button className="text-blue-400 text-xl focus:outline-none cursor-pointer" title="Menu" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
        </div>
      </div>
      { /* Mobile Navigation */ }
      {menuOpen && (
        <div className="md:hidden flex flex-row gap-4 p-4 bg-gray-800 border-t border-gray-700 shadow-md text-center">
           
                <NavLink 
                   className={({isActive}) =>     isActive ? active : base} to='/' onClick={() => setMenuOpen(false)}>Home</NavLink>

                <NavLink
                  className={({isActive}) => isActive ? active : base} to='/projects' onClick={() => setMenuOpen(false)}>Projects</NavLink>
                <NavLink
                  className={({isActive}) => isActive ? active : base} to='/blog' onClick={() => setMenuOpen(false)}>Blog</NavLink>
                <NavLink
                  className={({isActive}) => isActive ? active : base} to='/about' onClick={() => setMenuOpen(false)}>About</NavLink>
                <NavLink
                  className={({isActive}) => isActive ? active : base} to='/contact' onClick={() => setMenuOpen(false)}>Contact</NavLink>
           
        </div>
      )}
    </nav>
  );
};

export default Navbar;