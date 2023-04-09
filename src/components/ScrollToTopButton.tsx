import React from 'react';

import { TbCircleArrowUpFilled } from 'react-icons/tb';

interface ScrollButtonProps {
  visible: boolean;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ visible }) => {
  return (
    <button className={`
      fixed bottom-8 right-8
      rounded-full bg-pink
      hover:-translate-y-[2px]
      active:translate-y-0
      shadow-[#87325f] shadow
      hover:shadow-md hover:shadow-[#87325f]
      active:shadow-sm active:shadow-[#87325f]
      transition duration-1000
      ${visible ? 'opacity-100 visible' : 'opacity-0 collapse'}
    `}>
      <TbCircleArrowUpFilled className='text-white z-10' size={50} />
    </button>
  )
}

export default ScrollButton;
