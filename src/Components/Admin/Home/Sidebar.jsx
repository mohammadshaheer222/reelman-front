import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";

const Sidebar = ({ isOpen, closeMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    sliding: false,
    wedding: false,
    instagram: false,
  });

  const toggleDropdown = (dropdownName) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  return (
    <div
      className={`h-full w-[80%] sm:w-[40%] md:w-[35%] pt-1 px-8 fixed top-11 z-30 bg-gray-200 ${
        isOpen
          ? "left-0 transition-all duration-500"
          : "-left-[50rem] transition-all duration-500 "
      }`}
    >
      {isOpen && (
        <div className="flex flex-col gap-10 text-lg py-8 md:text-xl ">
          <div>
            <Link to="/reelman-admin" onClick={closeMenu}>
              <button className="flex items-center gap-x-2 focus:outline-none">
                <MdHome />
                Hero-Slide
              </button>
            </Link>
          </div>

          <div>
            <Link to="/reelman-admin/list-mid" onClick={closeMenu}>
              <button className="flex items-center gap-x-2 focus:outline-none">
                <MdHome />
                Mid-Slide
              </button>
            </Link>
          </div>

          <div>
            <Link to="/reelman-admin/list-wedding" onClick={closeMenu}>
              <button className="flex items-center gap-x-2 focus:outline-none">
                <MdHome />
                Wedding
              </button>
            </Link>
          </div>
           
          <div>
            <Link to="/reelman-admin/list-wedding-mid" onClick={closeMenu}>
              <button className="flex items-center gap-x-2 focus:outline-none">
                <MdHome />
                Wedding middle
              </button>
            </Link>
          </div>

          <div>
            <Link to="/reelman-admin/list-insta" onClick={closeMenu}>
              <button className="flex items-center gap-x-2 focus:outline-none">
                <MdHome />
                Instagram
              </button>
            </Link>
          </div>

          <div>
            <Link to="/reelman-admin/list-service" onClick={closeMenu}>
              <button className="flex items-center gap-x-2 focus:outline-none">
                <MdHome />
                Services
              </button>
            </Link>
          </div>

          <div className={`relative ${isDropdownOpen.instagram && "h-24"}`}>
            <button
              className="flex items-center gap-x-2 focus:outline-none"
              onClick={() => toggleDropdown("instagram")}
            >
              <MdHome />
              About
            </button>
            {isDropdownOpen.instagram && (
              <div className="absolute top-0 left-0 mt-10 bg-white border border-gray-200 shadow-md">
                <Link
                  onClick={closeMenu}
                  to="/reelman-admin/list-about"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Details
                </Link>
                <Link
                  onClick={closeMenu}
                  to="/list-photos"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Team
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
