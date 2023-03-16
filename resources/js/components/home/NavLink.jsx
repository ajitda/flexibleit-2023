import React from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export function NavLink({ path, label, children, ...rest }) {
    return (
      <Link
        to={path}
        spy={true}
        offset={-70}
        smooth={true}
        duration={500}
        className="nav-item"
        activeClass="active"
        {...rest}
      >
        {label}
      </Link>
    );
  }

export default NavLink