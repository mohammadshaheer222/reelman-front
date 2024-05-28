import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  

  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeColor);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <nav
        className={`flex items-center justify-between  px-8 py-2 fixed left-0 right-0 top-0 z-50 bg-gray-300`}
      >
        <div className="flex items-center gap-3">
          <p
            onClick={openMenu}
            className="font-medium tracking-wide cursor-pointer block "
          >
            {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </p>
        </div>
        <div>Admin Panel</div>
        <button className="bg-blue-500 text-white px-4">Logout</button>
      </nav>
      <Sidebar isOpen={isOpen} closeMenu={closeMenu} />
      <Outlet />
    </div>
  );
};
export default Navbar;
