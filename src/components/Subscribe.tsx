import subscribe from '../images/subscribe.png';
import { MdOutlineEmail } from 'react-icons/md';
import ButtonPrimary from './ButtonPrimary';

const Subscribe = () => {
  return (
    <div className='px-2 flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-20 items-center justify-center'>
      <div>
        <img src={subscribe} alt="subscribe" />
      </div>
      <div className='max-w-full sm:max-w-[70%] md:max-w-[60%]'>
        <h1 className='text-center text-violet text-5xl lg:text-6xl font-bold font-circular'>Subscribe To Our Blog</h1>
        <p className='mx-auto text-center text-descr font-proxima text-base md:text-xl mt-4 max-w-[90%]'>
          A newsletter is a tool used to communicate regularly with your subscribers, delivering the information
        </p>
        <div className='
          flex flex-row items-center justify-between
          mt-8 rounded-lg
          transition duration-500
          w-full
          py-3 px-4
          shadow-xl shadow-descr/25
        '>
          <MdOutlineEmail className='text-[#a0a0a0]' size={28} />
          <input className='
            text-violet placeholder:text-[#d2d2d2]
            text-xl
            py-4 pl-3 ml-4 mr-2
            w-full
            bg-pink/0
            outline-secondary
          '
            type="email" placeholder={(window.innerWidth >= 500) ? 'Type Your Email Address' : 'Email'} />
          <ButtonPrimary value='Send&nbsp;now'/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;
