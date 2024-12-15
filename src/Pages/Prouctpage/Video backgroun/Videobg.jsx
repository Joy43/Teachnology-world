import { useState, useEffect } from 'react';
import video1 from '../../../assets/vidslide/1.mp4';
import video2 from '../../../assets/vidslide/2.mp4';
import video3 from '../../../assets/vidslide/3.mp4';
import video4 from '../../../assets/vidslide/4.mp4';
import video5 from '../../../assets/vidslide/5.mp4';
import video6 from '../../../assets/vidslide/6.mp4';

const Videobg = () => {
    const videos = [video1, video2, video3, video4, video5, video6];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // Automatically change video every 15 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 10000); 

        return () => clearInterval(interval); 
    }, [videos.length]);

    return (
        <section className="relative w-full min-h-screen bg-gray-900">
            {/* Video Section */}
            <div className="relative h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden">
                <video
                    src={videos[currentVideoIndex]}
                    className="w-full h-full object-cover"
                    loop
                    autoPlay
                    muted
                ></video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
                    {/* <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Welcome to Our World
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl max-w-3xl">
                        Discover amazing stories, breathtaking visuals, and endless opportunities. 
                        Let us take you on an unforgettable journey.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium">
                        Get Started
                    </button> */}
                </div>
            </div>

            {/* Video Selector Controls */}
            <div className="absolute bottom-6 w-full flex justify-center items-center space-x-2">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        className={`w-6 h-6 md:w-5 md:h-5 rounded-full ${
                            currentVideoIndex === index
                                ? 'bg-blue-500 scale-125'
                                : 'bg-gray-400 hover:bg-gray-300'
                        } transition-all duration-300`}
                        onClick={() => setCurrentVideoIndex(index)}
                        aria-label={`Play video ${index + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Videobg;
