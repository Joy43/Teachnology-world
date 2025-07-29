import React, { useState, useEffect } from 'react';

const sliderData = [
  {
    img: 'https://i.ibb.co/yfHqzw8/computer-service-at-home-482x482.png',
    title: 'Computer Service at Home',
    des: 'Reliable and professional computer repair services delivered right to your home.',
  },
  {
    img: 'https://i.ibb.co/ZBJmt9D/laptop-service-desktop-banner-1290x500.png',
    title: 'Laptop Repair Service',
    des: 'Expert solutions for all laptop-related issues, ensuring optimal performance.',
  },
  {
    img: 'https://i.ibb.co/99rgVcP/desktop-repair-service-482x482.png',
    title: 'Desktop Repair Service',
    des: 'Comprehensive desktop repair services to keep your system running smoothly.',
  },
];

const servicesData = [
  {
    icon: '📱',
    title: 'Smartphone',
    description:
      'High-performance smartphones with cutting-edge technology and sleek designs.',
  },
  {
    icon: '💻',
    title: 'Laptop',
    description: 'Powerful laptops suitable for work, gaming, and multimedia.',
  },
  {
    icon: '🎧',
    title: 'Headphones',
    description:
      'Wireless and noise-cancelling headphones for immersive audio experiences.',
  },
  {
    icon: '📷',
    title: 'Camera',
    description:
      'High-resolution cameras for capturing stunning photos and videos.',
  },
  {
    icon: '🔊',
    title: 'Bluetooth Speaker',
    description: 'Portable speakers with powerful sound and long battery life.',
  },
  {
    icon: '🖨️',
    title: 'Printer',
    description:
      'Efficient printers for high-quality prints and versatile functionality.',
  },
];

// Slider Component
const Slider = ({ slides, currentSlide, onSlideChange }) => (
  <section className="relative rounded-lg overflow-hidden shadow-lg max-w-6xl mx-auto h-64 sm:h-96 md:h-[540px]">
    {slides.map((slide, i) => (
      <article
        key={i}
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          i === currentSlide
            ? 'opacity-100 visible z-10'
            : 'opacity-0 invisible z-0'
        }`}
        aria-hidden={i !== currentSlide}
      >
        <img
          src={slide.img}
          alt={slide.title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 bg-base-200 bg-opacity-60 backdrop-blur-sm">
          <h2 className="text-2xl sm:text-4xl font-extrabold">{slide.title}</h2>
          <p className="mt-2 text-sm sm:text-lg max-w-3xl">{slide.des}</p>
        </div>
      </article>
    ))}
    {/* Navigation Thumbnails */}
    <nav className="absolute top-4 right-4 flex flex-col gap-3 z-20">
      {slides.map((slide, i) => (
        <button
          key={i}
          className={`rounded-md overflow-hidden ring-2 ring-offset-2 focus:outline-none ${
            i === currentSlide
              ? 'ring-primary ring-offset-base-100'
              : 'ring-transparent opacity-60 hover:opacity-100'
          }`}
          onClick={() => onSlideChange(i)}
          aria-label={`Slide ${i + 1}: ${slide.title}`}
          type="button"
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="h-12 w-20 object-cover"
            loading="lazy"
          />
        </button>
      ))}
    </nav>
  </section>
);

// Service Card Component
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-base-100 rounded-xl shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
    <div className="text-6xl mb-4 select-none">{icon}</div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-base-content text-opacity-80">{description}</p>
  </div>
);

// Main Services Component
const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="px-4 py-10 max-w-7xl mx-auto">
      {/* Slider */}
      <Slider
        slides={sliderData}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />

      {/* Services Grid */}
      <section className="mt-20">
        <h2 className="text-center text-4xl font-extrabold mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      {/* Stepper + Contact Form */}
      <section className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Stepper */}
        <div className="bg-base-200 rounded-xl p-8 shadow-lg">
          <h3 className="text-3xl font-semibold text-center mb-10 font-serif">
            Follow These Simple Steps
          </h3>
          <div className="space-y-8">
            {[
              'Describe Your Issue',
              'Get a Quote',
              'Approve the Service Plan',
              'Send or Bring Your Device',
              'Get Your Device Back',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-content font-bold text-lg select-none">
                  {i + 1}
                </div>
                <div className="bg-base-100 p-5 rounded-xl shadow-sm flex-1">
                  <h4 className="text-xl font-semibold">{step}</h4>
                  <p className="text-base-content text-opacity-70 text-sm mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://fabform.io/f/xxxxx"
          method="post"
          className="bg-base-200 p-8 rounded-xl shadow-lg space-y-8"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-primary text-center">
            Send Us A Message
          </h2>
          {['Name', 'Email', 'Phone Number', 'Service Name'].map(
            (field, idx) => (
              <input
                key={idx}
                type={field === 'Email' ? 'email' : 'text'}
                name={field.toLowerCase().replace(/\s/g, '')}
                placeholder={field}
                required={field !== 'Phone Number'}
                className="input input-bordered input-primary w-full rounded-full px-4 py-3 text-base placeholder:text-base-content placeholder:text-opacity-60"
              />
            )
          )}
          <textarea
            name="message"
            rows="5"
            placeholder="About the issue"
            required
            className="textarea textarea-primary w-full rounded-xl px-4 py-3 text-base placeholder:text-base-content placeholder:text-opacity-60"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary w-full rounded-full text-lg font-semibold hover:brightness-110 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Services;
