import { useEffect, useRef } from "react";
import video from "../../../assets/Promotion video.mp4";
import { FaExclamationCircle, FaHeadset, FaMobileAlt } from "react-icons/fa";

const Banner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
      videoElement.addEventListener("ended", () => videoElement.play());
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", () => videoElement.play());
      }
    };
  }, []);

  const cardData = [
    {
      title: "Laptop Finder",
      description: "Find your perfect laptop",
      icon: <FaMobileAlt className="text-blue-400 text-4xl" />,
    },
    {
      title: "Online Support",
      description: "24/7 assistance for you",
      icon: <FaHeadset className="text-green-400 text-4xl" />,
    },
    {
      title: "Complaint",
      description: "Report an issue easily",
      icon: <FaExclamationCircle className="text-red-400 text-4xl" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-200">
      {/* Features Section */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 p-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex items-center gap-4 shadow-md rounded-lg p-6 bg-gray-800 hover:shadow-lg hover:bg-gray-700 transition-all duration-300"
          >
            {card.icon}
            <div>
              <h1 className="text-xl font-semibold text-gray-100">
                {card.title}
              </h1>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="hero min-h-screen bg-gray-800">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 w-full">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              className="rounded-lg shadow-lg w-full"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="card lg:w-1/2 w-full max-w-lg p-6 bg-gray-700 shadow-xl">
            <p className="mb-4 text-gray-300">
              Tach work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  value: 20,
                  color: "text-green-400",
                  svg: (
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  ),
                },
                {
                  value: 99,
                  color: "text-blue-400",
                  svg: (
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  ),
                },
                {
                  value: 50,
                  color: "text-yellow-300",
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
                  className="p-4 bg-gray-900 text-gray-100 rounded-lg shadow-lg relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute bottom-4 right-4 h-12 w-12 ${stat.color}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {stat.svg}
                  </svg>
                  <div className="text-2xl font-bold">{stat.value}</div>
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
