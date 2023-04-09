import src from '../images/curly-man.png';

const Testimonial = () => {
  return (
    <div className={`w-[90vw] xl:w-[70vw] mx-auto font-circular flex flex-col sm:flex-row items-center gap-8 md:gap-16 xl:gap-32`}>
      <div className='order-2 max-w-full sm:max-w-[50%] md:max-w-[40%]'>
        <h3 className="text-2xl lg:text-3xl text-pinky mb-6 lg:mb-8 font-medium">Testimonial</h3>
        <h1 className="text-5xl lg:text-6xl text-violet font-bold mb-5 lg:mb-8">
          Thats What Our Client Says About Us
        </h1>
        <p className="text-descr text-base md:text-xl tracking-wide font-proxima mb-10">
          “ Heartiest congratulations to the team for Future projects. I extend thankful wishes and wish the team best of luck for the future assignments to come. Your effort is gladly ”
        </p>
        <p className='font-proxima text-2xl lg:text-3xl text-violet mt-4 lg:mt-6 font-bold'>Jorge Morrison</p>
        <p className='font-proxima text-sm lg:text-base text-secondary mt-1'>North California,USA</p>
      </div>
      <div className='order-1 py-8 px-14 bg-pinky rounded-lg min-w-[35%] aspect-square'>
        <img src={src} alt="content_img" className='w-[100%] h-[100%]' />
      </div>
    </div>
  )
}

export default Testimonial;
