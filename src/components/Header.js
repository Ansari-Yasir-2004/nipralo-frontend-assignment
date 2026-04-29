import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import PentaKuhlImg from "../assets/images/png/pentakuhl.png"
import "../assets/styles/header.css"

const Header = () => {
  const { pathname } = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

    if (currentScrollY < 80) {
      setShowNavbar(true);
    } else if (currentScrollY > lastScrollY.current) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    lastScrollY.current = currentScrollY;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [])

  return (
    <header>
      <nav className={`flex justify-center items-center w-full h-[64px] bg-white text-black px-6 fixed top-0 z-[999] navbar
          ${showNavbar ? "show" : "hide"}
        `}>
        <ul className="flex list-none gap-[40px] text-black pb-40 md:pb-0 mt-[64.1px] md:mt-[63px] lg:mt-0 nav-links">
          <li className="nav-item border-y lg:border-0">
            <Link
              to={"/"}
              className={`${pathname === "/" && "active-link"}`}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item border-y lg:border-0">
            <Link
              to={"/industries"}
              className={`${pathname === "/industries" && "active-link"}`}
            >
              INDUSTRIES
            </Link>
          </li>
          <li className="nav-item border-y lg:border-0">
            <Link
              to={"/pentakuhl"}
              className={`flex items-center lg:h-full`}
            >
              <img src={PentaKuhlImg} alt="PentaKuhl" className='h-[16px] mt-[-2px]' />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
