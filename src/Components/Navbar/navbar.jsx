import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const [active, setActive] = useState('navBar');

  // function to toggle navbar
  const showNav = () => {
    setActive('active activeNavbar');
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <h1>
              {' '}
              <MdOutlineTravelExplore className='icon' /> Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navlists flex'>
            <li className='navItem'>
              <a href='#' className='navlink'>
                Home{' '}
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navlink'>
                Packages
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navlink'>
                Shop
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navlink'>
                About
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navlink'>
                Pages
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navlink'>
                News
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navlink'>
                Contact
              </a>
            </li>

            <button className='btn'>
              <a href='#'>Book Now</a>
            </button>
          </ul>
        </div>

        <div className='closeNavbar'>
          <AiFillCloseCircle className='icon' />
        </div>

        <div className='toggleNavbar'>
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
