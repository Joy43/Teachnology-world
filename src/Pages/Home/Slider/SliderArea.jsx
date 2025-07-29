import { useState, useEffect } from "react";

const SliderArea = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = [
    { url: "https://i.ibb.co/JFmR5RJ/1.png" },
    { url: "https://i.ibb.co/8Nt8kHx/2.png" },
    { url: "https://i.ibb.co/7CXJyQ8/3.png" },
    { url: "https://i.ibb.co/vcfpMY8/4.png" },
    { url: "https://i.ibb.co/T4GRPJJ/5.png" },
  ];

  // Function to navigate to the previous slide
  const prevSlider = () => {
    setCurrentSlider((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  // Function to navigate to the next slide
  const nextSlider = () => {
    setCurrentSlider((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  // Auto-change slider using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlider();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlider]); // Re-run effect when currentSlider changes

  return (
    <div className="max-w-6xl mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative mt-14">
      {/* Navigation buttons */}
      <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
        {/* Arrow left */}
        <button
          onClick={prevSlider}
          className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8 shadow-md"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </svg>
        </button>
        {/* Arrow right */}
        <button
          onClick={nextSlider}
          className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8 shadow-md"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </svg>
        </button>
      </div>
      {/* Slider container */}
      <div
        className="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
        style={{ transform: `translateX(-${currentSlider * 50}%)` }}
      >
        {/* Sliders */}
        {sliderImages.map((slide, index) => (
          <div
            key={index}
            className={`${
              currentSlider === index
                ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]"
                : "h-[220px] sm:h-[260px] md:h-[380px] lg:h-[480px] scale-95 opacity-40"
            } min-w-[50%] relative duration-200`}
            style={{ perspective: "200px" }}
          >
            <img
              src={slide.url}
              className="w-full h-full bg-gray-900 rounded-lg duration-300"
              alt={`Slide ${index}`}
              style={{
                transform: `${
                  currentSlider - 1 === index
                    ? "rotateY(4deg)"
                    : currentSlider + 1 === index
                    ? "rotateY(-4deg)"
                    : ""
                }`,
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderArea;
