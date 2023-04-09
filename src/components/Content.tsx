import React from "react";

import content from '../content/content.json';

import image0 from '../images/content0.png';
import image1 from '../images/content1.png';
import image2 from '../images/content2.png';

import ButtonPrimary from "./ButtonPrimary";


interface ContentProps {
  index: number;
}

const Content: React.FC<ContentProps> = ({ index }) => {
  const data = content[index];

  return (
    <div className={`w-[90vw] lg:w-[80vw] mx-auto font-circular flex flex-col gap-6 sm:flex-row items-center justify-center ${index === 0 ? 'sm:gap-6' : 'sm:gap-8 xl:gap-20'}`}>
      <div className={`
        ${data.image_position === 'right' ? 'order-1' : 'order-2'}
        max-w-full sm:max-w-[50%] md:max-w-[40%]
      `}>
        <h3 className="text-3xl sm:text-2xl lg:text-3xl text-pinky mb-6 lg:mb-8 font-medium ">{data.header}</h3>
        <h1 className="text-5xl lg:text-6xl text-violet font-bold mb-6 lg:mb-8">{data.title}</h1>
        <p className="text-descr text-xl sm:text-base md:text-xl tracking-wide font-proxima mb-7 lg:mb-10">{data.description}</p>
        <ButtonPrimary value={data.button_name} />
      </div>
      <div className={`${data.image_position === 'right' ? 'order-2' : 'order-1'}`} >
        <img src={index === 0 ? image0 : index === 1 ? image1 : index === 2 ? image2 : ''} alt="content_img" />
      </div>
    </div>
  )
}

export default Content;
