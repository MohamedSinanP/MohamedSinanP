'use client';
import NavLink from './NavLink';
import SideBar from './SideBar';
import { useState } from 'react';
import { navlinks } from '@/config/navConfig';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavBar = (e, state) => {
    setIsOpen(state);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212]'>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className='text-white text-3xl font-semibold'>
          <Image
            src='/assets/ms.webp'
            alt='LOGO'
            width={50}
            height={50}
          />
        </a>
        <div className='mobile-menu block md:hidden'>
          {
            !isOpen ?
              <button
                onClick={(e) => handleMobileNavBar(e, true)}
                className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
              >
                <Bars3Icon className='h-5 w-5' />
              </button> :
              <button
                onClick={(e) => handleMobileNavBar(e, false)}
                className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
              >
                <XMarkIcon className='h-5 w-5' />
              </button>
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
              navlinks.map((nav, index) => (
                <NavLink
                  name={nav.name}
                  path={nav.path}
                  key={index}
                />
              ))
            }
          </ul>
        </div>
      </div>
      {isOpen ? <SideBar handleClose={() => setIsOpen(false)} /> : null}
    </nav>
  );
};

export default NavBar;