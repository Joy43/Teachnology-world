import { useEffect, useRef } from 'react';
import video from '../../../assets/Promotion video.mp4';
import {
  FaExclamationCircle,
  FaHeadset,
  FaMobileAlt,
  FaRocket,
} from 'react-icons/fa';

const Banner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
      const handleEnded = () => videoElement.play();
      videoElement.addEventListener('ended', handleEnded);
      return () => videoElement.removeEventListener('ended', handleEnded);
    }
  }, []);

  const cardData = [
    {
      title: 'Laptop Finder',
      description: 'Find your perfect laptop',
      icon: <FaMobileAlt className="text-primary text-4xl" />,
    },
    {
      title: 'Online Support',
      description: '24/7 assistance for you',
      icon: <FaHeadset className="text-secondary text-4xl" />,
    },
    {
      title: 'Complaint',
      description: 'Report an issue easily',
      icon: <FaExclamationCircle className="text-error text-4xl" />,
    },
  ];

  return (
    <div className="w-full">
      {/* Feature Cards */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 p-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card glass hover:shadow-xl shadow-md p-6 transition-all duration-300 hover:scale-105 flex items-center gap-4"
          >
            {card.icon}
            <div>
              <h1 className="text-lg font-bold">{card.title}</h1>
              <p className="text-sm ">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="hero min-h-screen px-4">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          {/* Video Block */}
          <div className="w-full lg:w-1/2">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-2xl w-full border border-base-300"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text & Stats */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Empower Your Tech Journey 🚀
            </h2>
            <p className="text-base text-neutral-content leading-relaxed">
              Work smarter across your enterprise with a collaborative platform.
              Link issues across tools, get full visibility, and respond to
              incidents quickly.
            </p>

            <button className="btn btn-primary gap-2 shadow-lg">
              <FaRocket />
              Get Started
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {[
                {
                  value: 20,
                  color: 'text-success',
                  svg: <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />,
                },
                {
                  value: 99,
                  color: 'text-primary',
                  svg: (
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  ),
                },
                {
                  value: 50,
                  color: 'text-warning',
                  svg: (
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  ),
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="card glass p-4 shadow-md relative text-center hover:scale-105 transition duration-300"
                >
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <svg
                    className={`absolute bottom-2 right-2 w-10 h-10 ${stat.color}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {stat.svg}
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
