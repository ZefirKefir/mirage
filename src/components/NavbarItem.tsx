import React from 'react';

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className='cursor-pointer text-secondary hover:text-violet transition hover:scale-105 font-medium duration-500'>
      {label}
    </div>
  )
}

export default NavbarItem;
