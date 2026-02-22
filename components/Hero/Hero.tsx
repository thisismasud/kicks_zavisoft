import Banner from "./Banner";

const Hero = () => {
  return (
    <section>
        {/* Hero Title Text */}
      <div className="hero-title font-rubik font-bold text-center text-dark-gray lg:leading-62">
        DO IT <span className="text-primary">RIGHT</span>
      </div>

        <Banner/>
    </section>
  );
};

export default Hero;
