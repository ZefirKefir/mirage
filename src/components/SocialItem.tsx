import React from 'react';

import { SlSocialInstagram, SlSocialTwitter, SlSocialYoutube } from 'react-icons/sl';
import { AiOutlineFacebook } from 'react-icons/ai';

interface SocProps {
  item: string;
}
const SocialItem:React.FC<SocProps> = ({ item }) => {
  const elem = item === 'instagram' ? <SlSocialInstagram size={16} className='
    scale-75 md:scale-100 lg:scale-[1.2] text-[#a7a7a7] group-hover:text-pink transititon duration-500
  ' /> :
                item === 'twitter' ? <SlSocialTwitter size={16} className='
                  scale-75 md:scale-100 lg:scale-[1.2] text-[#a7a7a7] group-hover:text-pink transititon duration-500
                ' /> :
                  item === 'youtube' ? <SlSocialYoutube size={16} className='
                    scale-75 md:scale-100 lg:scale-[1.2] text-[#a7a7a7] group-hover:text-pink transititon duration-500
                  ' /> :
                    item === 'facebook' ? <AiOutlineFacebook size={16} className='
                      scale-75 md:scale-100 lg:scale-[1.2] text-[#a7a7a7] group-hover:text-pink transititon duration-500
                    ' /> : <span></span>
  return (
    <div className='
      w-5 md:w-6 lg:w-8 aspect-square
      bg-white rounded-full
      cursor-pointer group
      flex flex-row items-center justify-center
      hover:scale-110 transition
    '>
      {elem}
    </div>
  )
}

export default SocialItem;