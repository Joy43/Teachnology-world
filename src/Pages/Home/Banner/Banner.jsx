// Import statements...

import { useEffect, useRef } from "react";
import video from '../../../assets/Promotion video.mp4'
const Banner = () => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      videoRef.current.play();
      videoRef.current.addEventListener('ended', () => {
        videoRef.current.play();
      });
    }, []);
  
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <video
                ref={videoRef}
                autoPlay
                muted
                width="100%"
                height="600px"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card p-2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             
            
<p className="mb-3 text-base-200-300 dark:text-fuchsia-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:to-base-100 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Tach work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{/* --------------card-------- */}

 <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-12 sm:col-span-4">
                  <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14  absolute bottom-4 right-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                    <div className="flex justify-between items-center ">
                        <img src="" alt="" />
                      {/* <img className="w-7 filter grayscale" src="https://v1.tailwindcss.com/_next/static/media/tailwindcss-mark.6ea76c3b72656960a6ae5ad8b85928d0.svg"alt="taiwind css"/> */}
                    </div>
                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">20</div>
                    {/* <div className="text-sm text-gray-500">performance</div> */}
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14  absolute bottom-4 right-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <div className="flex justify-between items-center ">
                      <i className="fab fa-behance text-xl text-gray-400"></i>
                    </div>
                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">99</div>
                    {/* <div className="text-sm text-gray-500">Projects</div> */}
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14  absolute bottom-4 right-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div className="flex justify-between items-center ">
                      <i className="fab fa-codepen text-xl text-gray-400"></i>
                    </div>
                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">50</div>
                    {/* <div className="text-sm text-gray-500">Pen Items</div> */}
                  </div>
                </div>
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2"></div>




              
            </div>

            
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  