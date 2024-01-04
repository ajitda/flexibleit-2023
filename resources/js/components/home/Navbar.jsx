import { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import ProfileImg from "../ProfileImg";
import { useAuth } from "../../hooks/auth";

const Navbar = () => {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

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
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-secondary" : "text-primary"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
            <Link to={nav.path || "/"}>{nav.title}</Link>
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
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
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
