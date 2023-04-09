import React, { SetStateAction, useState } from 'react';

import FooterLinkSection from "./FooterLinkSection";
import LanguageMenu from "./LanguageMenu";
import LogoLink from "./LogoLink";
import SocialItem from "./SocialItem";

import { TfiWorld } from 'react-icons/tfi';
import { VscTriangleDown } from 'react-icons/vsc';

interface FooterProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const Footer:React.FC<FooterProps> = ({language, setLanguage}) => {
  const social = ['instagram', 'twitter', 'youtube', 'facebook'];

  const [showLangMenu, setShowLangMenu] = useState(false);
  
  return (
    <footer className="
      pt-16 pb-28 px-6
      bg-[url('./images/footer-bg.png')] bg-cover bg-no-repeat bg-bottom
      relative
    ">
      {/* upper */}
      <div className="flex flex-col md:flex-row items-start justify-between md:w-[90vw] mx-auto gap-8 md:gap-2">
        <div>
          <LogoLink />
          <p className="text-descr tracking-[0.02em] text-xl md:text-base font-proxima mt-6 xl:mt-9">
            560 N Riverview D Ste 658
            <br />
            North Carolina DA 598745 USA
          </p>
          <div className="social mt-9">
            <p className="text-descr font-proxima text-xl md:text-base tracking-[0.02em] font-bold mb-4">
              Follow us on
            </p>
            <div className="flex flex-row gap-3">
              {social.map(social => (
                <SocialItem key={social} item={social} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20">
          <FooterLinkSection title='Resources' links={['Revisions', 'Sheets', 'Quiz', 'Drill']} />
          <FooterLinkSection title='About' links={['About us', 'Partners', 'Contact us', 'Careers']} />
          <FooterLinkSection title='Helpful link' links={['Mirage', 'Solutions', 'Industries', 'Services']} />
        </div>
      </div>
      {/* bottom */}
      <div className="absolute left-0 bottom-0 bg-pink w-full px-6 py-4">
        <div className="md:w-[90vw] mx-auto flex items-center justify-between">
          <p className="font-circular text-sm tracking-[0.02em] text-white">
            © All Rights Reserved By Mirage 2020
          </p>
          <button onClick={() => setShowLangMenu(!showLangMenu)}
            className="
              text-white flex gap-1 items-center
              cursor-pointer
              relative
              group
            "
          >
            <TfiWorld size={15} />
            <p className="tracking-[0.02em] text-sm group-hover:scale-110 transition mx-1">{language}</p>
            <VscTriangleDown size={10} className={`transition duration-300 translate-y-px ${showLangMenu ? 'rotate-180' : 'rotate-0'}`} />
            {/* popup */}
            <LanguageMenu setLanguage={setLanguage} visible={showLangMenu} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
