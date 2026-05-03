const Hero = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/gMXYYZDj/pexels-polesietoys-6130352.jpg"
        alt="hero"
        className="object-cover h-70 md:h-100 lg:h-150 shadow-2xl w-full"
      />
      <div className="absolute top-[10%] left-[5%] text-white">
        <h1 className="text-[7vw] font-bold leading-tight ">
          Welcome to ToyTopia
        </h1>

        <p className="text-[1.5vw] mt-2 ml-5">Magical toys for every child</p>
      </div>
    </div>
  );
};

export default Hero;
