import React from 'react';

interface LinkSectionProps {
  title: string;
  links: string[];
}

const FooterLinkSection: React.FC<LinkSectionProps> = ({ title, links }) => {
  return (
    <>
      <div className='flex flex-col gap-2 md:gap-6 min-w-[230px] md:min-w-0'>
        <p className='font-medium font-circular text-violet text-2xl md:text-xl lg:text-2xl tracking-[0.02em] md:mb-4'>
          {title}
        </p>
        {links.map((link, index) => (
          <a href='#' key={index} className='text-descr md:block tracking-[0.02em] font-proxima text-xl md:text-base lg:text-xl
          hover:scale-105 hover:text-pink transition duration-300'>{link}</a>
        ))}
      </div>
    </>
  )
}

export default FooterLinkSection;
