import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '..';
import { menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* ====================== Desktop Nav ====================== */}
<nav className="hidden sm:flex fixed top-0 left-0 z-50 w-full bg-flashWhite shadow-md">
  <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between px-10 py-2">
    <Link to="/" onClick={() => setActive('')} className="flex items-center">
      <h1 className="text-[20px] sm:text-[35px] font-extrabold text-black tracking-widest leading-tight">
        VIGNESHWARI SAKTHIVEL
      </h1>
    </Link>
    <ul className="flex flex-row gap-8">
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`${
            active === nav.title ? 'text-french' : 'text-eerieBlack'
          } hover:text-taupe text-[17px] font-mova uppercase tracking-wide cursor-pointer`}
          onClick={() => setActive(nav.title)}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  </div>
</nav>


      {/* ====================== Mobile Nav ====================== */}
      <nav className="sm:hidden fixed top-0 left-0 z-50 w-[300px] bg-flashWhite shadow-md">
        <div className="w-full flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
              setToggle(false);
            }}
          >
            <h1 className="text-[14px] font-extrabold text-black tracking-widest whitespace-nowrap">
              VIGNESHWARI S
            </h1>
          </Link>

          {/* Menu Toggle */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Dropdown Menu */}
        {toggle && (
          <div className="bg-flashWhite px-6 py-4 shadow-md">
            <ul className="flex flex-col gap-6">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-french' : 'text-eerieBlack'
                  } text-[18px] font-semibold font-mova uppercase tracking-wider cursor-pointer`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
