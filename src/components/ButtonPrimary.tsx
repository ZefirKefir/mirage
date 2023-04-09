import React from 'react';

import { CiLogin } from 'react-icons/ci';
import { TbRectangleVertical, TbArrowNarrowRight } from 'react-icons/tb';

interface ButtonPrimaryProps {
  value?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({value}) => {
  return (
    <button className="
      flex flex-grow items-center gap-2
      text-white text-base lg:text-xl font-medium
      py-4 px-5 rounded-md
      bg-pinky hover:bg-[#e070a4] active:bg-[#cf6295]
      hover:scale-[1.02] active:scale-100
      transition-all duration-1000 hover:duration-300
      group
    ">
      {value || 'Learn more'}
      <div className='relative h-full w-10'>
        {' '}
        <TbRectangleVertical className='absolute right-0 top-[50%] -translate-y-[50%]' size={30} />
        <TbArrowNarrowRight className='absolute right-1 top-[50%] -translate-y-[50%]
          group-hover:animate-wiggle
        ' size={30} />
      </div>
      {/* <CiLogin className="w-8 h-8" /> */}
    </button>
  )
}

export default ButtonPrimary;
