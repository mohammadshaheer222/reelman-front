import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "/src/assets/images/logo.png";
import logo2 from "/src/assets/images/logo2.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeColor);

  const openMenu = () => {
    setIsOpen(!isOpen);
    // if (!isOpen) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "unset";
    // }
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 5,
      },
    },
  };
  const mobNavVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.4,
      },
    },
  };
  return (
    <div>
      <div className={`${isOpen && "text-black"} `}>
        <motion.nav
          variants={navbarVariant}
          initial="hidden"
          animate="visible"
          className={`flex items-center justify-between md:justify-around w-full px-8 py-2 fixed left-0 right-0 top-0 z-20 ${
            color ? "bg-[#F0E9E0]" : "bg-none"
          }`}
        >
          <Link to="/" className="uppercase cursor-pointer">
            <img src={logo} alt="logo" width={50}/>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/9895943440?text=Hei"
              className="font-medium text-sm tracking-wide cursor-pointer block md:hidden"
            >
              [LET'S CHAT]
            </a>
            <p
              onClick={openMenu}
              className="font-medium tracking-wide cursor-pointer block md:hidden"
            >
              {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
            </p>
          </div>

          {/* desktop */}
          <div className="hidden md:flex md:items-center tracking-widest md:gap-x-10 font-medium text-lg uppercase">
            <Link to="/" className="hover:text-gray-400 " onClick={closeMenu}>
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/service"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Service
            </Link>
            <Link
              to="/wedding"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Wedding
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <a
              href="https://wa.me/7561847879?text=Hello"
              className="font-medium hover:text-gray-400 text-lg tracking-wide cursor-pointer hidden md:block "
            >
              [LET'S CHAT]
            </a>
          </div>
        </motion.nav>

        {/* mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobNavVariant}
              exit="exit"
              initial="hidden"
              animate="visible"
              className="bg-[#F0E9E0] md:hidden font-semibold tracking-wider flex flex-col items-center justify-center h-screen gap-10 fixed left-0 right-0 top-0 z-10 md:text-lg "
            >
              <Link
                to="/"
                className="hover:text-gray-600 uppercase"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-gray-600 uppercase"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/wedding"
                className="hover:text-gray-600 uppercase"
                onClick={closeMenu}
              >
                Wedding
              </Link>
              <Link
                to="/contact"
                className="hover:text-gray-600 uppercase"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Outlet />
    </div>
  );
};
export default Navbar;
