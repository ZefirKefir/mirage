import React from 'react';
import MobileMenuItem from './MobileMenuItem';

interface MobileMenuProps {
  visible: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  return (
    <div className={`
      absolute
      top-9 right-0
      rounded-sm
      ${visible ? 'visible opacity-100 scale-y-100' : 'invisible opacity-0 scale-y-0'}
      origin-top
      transition-all duration-300
      p-2 bg-white/[.90]
      flex flex-col
    `}>
      <MobileMenuItem label='Home' />
      <MobileMenuItem label='About' />
      <MobileMenuItem label='Product' />
      <MobileMenuItem label='Pricing' />
    </div>
  )
}

export default MobileMenu;
