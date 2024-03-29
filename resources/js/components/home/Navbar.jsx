import { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import ProfileImg from "../ProfileImg";
import { useAuth } from "../../hooks/auth";

const Navbar = () => {

  // const [active, isActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-500' : 'text-primary';
  };
  const isActiveSs = (path) => {
    return location.pathname === path ? 'text-blue-500' : ' text-white';
  };

  const [showToolsDropdown, setShowToolsDropdown] = useState(false);

  const toggleToolsDropdown = () => {
    setShowToolsDropdown(!showToolsDropdown);
  };

  // if (user && user.name && typeof user.name === 'string') {
  //   console.log('user', user)
  //   const nameArr = user.name.split(' ');
  //   const characters = nameArr.map((name) => name[0]).join('').toUpperCase();
  //   const defaultClass = customClass || 'w-11 h-11';
  // }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to={'/'}>
      <img src={logo} alt="hoobank" className="w-[150px] h-[50px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-black cursor-pointer text-[16px] ${
            isActive(nav.path)} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`} 
            // onMouseEnter={() => {
            //   if (nav.title === "Tools") {
            //     setShowToolsDropdown(true);
            //   }
            // }}
            // onMouseLeave={() => {
            //   if (nav.title === "Tools") {
            //     setShowToolsDropdown(true);
            //   }
            // }}
          >
            {nav.title === "Tools" ? (
              <div
                // onMouseEnter={toggleToolsDropdown}
                onClick={toggleToolsDropdown}
                className="relative"
              >
                <span>{nav.title}</span>
                {showToolsDropdown && (
                  <ul className="absolute font-semibold top-full left-0 bg-white mt-2 pl-5 py-5 w-60 shadow-lg rounded-md">
                    <li className="mb-2">
                      <Link to="/tools/image-converter">Image Converter</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/tools/area-calculator">Area Calcutalor</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/tools/email-extractor">Email Extractor</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/tools/twitch-emote-resizer">Twitce Emote Resizer</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="https://qr.devsbrain.com/">QR Code Generator</Link>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link to={nav.path || "/"}>{nav.title}</Link>
            )}
          </li>
        ))}
        <div className="px-5 cursor-pointer">
          <a href="/account">
            <ProfileImg />
          </a>
        </div>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain bg-black p-2 rounded-sm"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  isActiveSs(nav.path)} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                {nav.title === "Tools" ? (
              <div
                // onMouseEnter={toggleToolsDropdown}
                onClick={toggleToolsDropdown}
                className="relative"
              >
              <span>{nav.title}</span>
              {showToolsDropdown && (
                <ul className="absolute font-semibold top-full -right-20 bg-white text-black mt-2 pl-4 py-5 w-48 shadow-lg rounded-md">
                  <li className="mb-2">
                      <Link to="/tools/image-converter">Image Converter</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/tools/area-calculator">Area Calcutalor</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/tools/email-extractor">Email Extractor</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/tools/twitch-emote-resizer">Twitce Emote Resizer</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="https://qr.devsbrain.com/">QR Code Generator</Link>
                    </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to={nav.path || "/"}>{nav.title}</Link>
          )}
              </li>
            ))}
            <div className="cursor-pointer pt-5">
              <a href="/account">
                <ProfileImg />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
