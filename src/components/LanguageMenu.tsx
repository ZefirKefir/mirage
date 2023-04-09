import React, { Dispatch, SetStateAction } from 'react';

interface LangMenuProps {
  visible: boolean;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const LanguageMenu: React.FC<LangMenuProps> = ({ visible, setLanguage }) => {
  let langs = ['Eng', 'Rus', 'Pol'];
  
  return (
    <div className={`
    absolute bottom-9 right-0
    ${!visible ? 'invisible opacity-0' : 'visible opacity-100'}
    origin-bottom
    ${!visible ? 'scale-y-0' : 'scale-y-100'}
      transition-all duration-500
      flex flex-col
      w-full bg-violet
      py-2
      rounded-sm
    `}>
      {langs.map(lang => (
        <div key={lang}
          onClick={() => {
            setLanguage(lang);
            localStorage.setItem('lang', lang);
          }}
          className={`
            text-white hover:scale-110 hover:font-semibold
            rounded-sm
            px-4 py-1`}
        >{lang}</div>
      ))}
    </div>
  )
}

export default LanguageMenu;
