import React from 'react';

interface MobileMenuItemProps {
  label: string;
  href?: string;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ label, href }) => {
  return (
    <a href={href || '#'}
      className='
        px-5 py-1 rounded-sm
        text-sm font-medium text-violet
        hover:scale-105 hover:bg-violet/50
        transition duration-300
      '>
      {label}
    </a>
  )
}

export default MobileMenuItem;
