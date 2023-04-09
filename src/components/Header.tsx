import { useState, useEffect } from 'react';

import { GoChevronDown } from 'react-icons/go';

import NavbarItem from "./NavbarItem";
import LogoLink from './LogoLink';
import MobileMenu from './MobileMenu';

const TARGET_SCROLL = 80;

const Header = () => {
  const [showBg, setShowBg] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TARGET_SCROLL) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
    
  }, [])

  return (
    <header className={`
      fixed top-0 w-full z-10
      flex flex-row items-center justify-between
      py-2 px-4 md:py-6 md:px-12 lg:py-8 lg:px-20
      ${showBg ? 'bg-white/[.93]' : 'bg-white/0'}
      transition duration-500
    `}>
      <LogoLink />
      <button onClick={() => setShowMobileMenu(!showMobileMenu)} className='
        flex flex-row items-center gap-px
        font-medium font-circular text-violet
        hover:scale-105 active:scale-100
        transition duration-300
        cursor-pointer
        md:hidden
      '>
        Menu
        <GoChevronDown size={20}
          className={`${showMobileMenu ? '-scale-y-100' : 'scale-y-100'} delay-200 transition duration-500`} />
      </button>
      <MobileMenu visible={showMobileMenu} />
      <nav className="hidden md:flex flex-row gap-20 font-circular">
        <NavbarItem label='Home' />
        <NavbarItem label='About' />
        <NavbarItem label='Product' />
        <NavbarItem label='Pricing' />
      </nav>
    </header>
  )
}

export default Header;
