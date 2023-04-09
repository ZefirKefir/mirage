import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="px-5 mx-auto flex flex-col justify-center">
      <h3 className="text-2xl lg:text-3xl text-pinky mb-2 font-medium text-center">
        Our Services
      </h3>
      <h1 className="text-5xl lg:text-6xl text-violet font-bold text-center mb-14">
        Why People Choose Us
      </h1>
      <div className="
        grid align-baseline items-start gap-5 justify-center
        grid-cols-[280px] grid-rows-4
        sm:grid-cols-[280px_280px] sm:grid-rows-[1fr_1fr]
        xl:grid-cols-[280px_280px_280px_280px] xl:grid-rows-1
        xl:grid lg:grid md:grid sm:grid
      ">
        <ServiceCard title='Design' descr='a plan or drawing produced to show the look and function' index={0} />
        <ServiceCard title='Development' descr='Development is defined as the process of growth or new ' index={1} />
        <ServiceCard title='Branding' descr='The marketing practice of creating a name, symbol or' index={2} />
        <ServiceCard title='Illustration' descr='An illustration is a decoration, interpretation or visual' index={3} />
      </div>
    </div>
  )
}

export default Services;