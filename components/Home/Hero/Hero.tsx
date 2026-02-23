import Banner from "./Banner";

const Hero = () => {
  return (
    <section aria-labelledby="hero-title" className="max-w-330 mx-auto">
      <h1
        id="hero-title"
        className="hero-title font-rubik font-bold text-center text-dark-gray tracking-tight sm:tracking-normal lg:leading-62"
      >
        DO IT <span className="text-primary">RIGHT</span>
      </h1>


      <Banner />
    </section>
  );
};

export default Hero;
