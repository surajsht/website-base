const Hero = () => {
  return (
    <div className="container px-4 md:flex md:h-screen md:items-center md:space-x-8">
      <div className="hero-content mb-4 md:w-1/2">
        <h2 className="mb-3 text-4xl font-bold md:text-6xl md:mb-4">
          Namaste!! This Is Travel Nepal.
        </h2>
        <h3 className="mb-3 text-3xl font-semibold md:text-4xl md:mb-4">
          This is demo sub title
        </h3>
        <p className="mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          molestias architecto inventore sed rerum cupiditate!
        </p>
        <button> Learn more </button>
      </div>

      <div className="hero-image md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1564326379078-4a510f03572e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="hero-image"
          className="h-[460px] w-full object-cover md:h-[600px]"
        />
      </div>
    </div>
  );
};

export default Hero;
