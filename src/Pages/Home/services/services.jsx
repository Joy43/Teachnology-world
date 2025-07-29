import React, { useState, useEffect } from 'react';

const sliderData = [
    {
        "img": "https://i.ibb.co/yfHqzw8/computer-service-at-home-482x482.png",
        "title": "Computer Service at Home",
        "des": "Reliable and professional computer repair services delivered right to your home."
    },
    {
        "img": "https://i.ibb.co/ZBJmt9D/laptop-service-desktop-banner-1290x500.png",
        "title": "Laptop Repair Service",
        "des": "Expert solutions for all laptop-related issues, ensuring optimal performance."
    },
    {
        "img": "https://i.ibb.co/99rgVcP/desktop-repair-service-482x482.png",
        "title": "Desktop Repair Service",
        "des": "Comprehensive desktop repair services to keep your system running smoothly."
    },
   
   
  
];

const servicesData = [
    { 
        "icon": "📱", 
        "title": "Smartphone", 
        "description": "High-performance smartphones with cutting-edge technology and sleek designs." 
    },
    { 
        "icon": "💻", 
        "title": "Laptop", 
        "description": "Powerful laptops suitable for work, gaming, and multimedia." 
    },
    { 
        "icon": "🎧", 
        "title": "Headphones", 
        "description": "Wireless and noise-cancelling headphones for immersive audio experiences." 
    },
    { 
        "icon": "📷", 
        "title": "Camera", 
        "description": "High-resolution cameras for capturing stunning photos and videos." 
    },
    { 
        "icon": "🔊", 
        "title": "Bluetooth Speaker", 
        "description": "Portable speakers with powerful sound and long battery life." 
    },
    { 
        "icon": "🖨️", 
        "title": "Printer", 
        "description": "Efficient printers for high-quality prints and versatile functionality." 
    }
];
// -----------------slider service-------------
const Slider = ({ slides, currentSlide, onSlideChange }) => (
    <div className="relative h-72 w-full sm:h-96 md:h-[540px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-linear ${
                    index === currentSlide ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <img src={slide.img} alt={slide.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex flex-col  p-5 text-center ">
                    <div className="mt-auto mb-5  p-3 rounded-md backdrop-blur-md">
                        <h1 className="text-xl font-semibold lg:text-3xl">{slide.title}</h1>
                        <p className="text-sm md:text-base lg:text-lg">{slide.des}</p>
                    </div>
                </div>
            </div>
        ))}
        <div className="flex flex-row sm:flex-col items-center gap-3 absolute top-0 right-0 p-4">
            {slides.map((_, index) => (
                <img
                    key={index}
                    src={slides[index].img}
                    alt={slides[index].title}
                    className={`h-10 w-16 sm:h-12 sm:w-20 object-cover rounded-md cursor-pointer transition-transform duration-300 ${
                        currentSlide === index ? 'ring-2 ring-sky-500' : 'opacity-60'
                    }`}
                    onClick={() => onSlideChange(index)}
                />
            ))}
        </div>
    </div>
);
// ---------feature sevice--------------
const ServiceCard = ({ icon, title, description }) => (
    <div className=" rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">{icon}</div>
        <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">{title}</h3>
        <p className="">{description}</p>
    </div>
);

const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="p-5">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-5">
                <Slider slides={sliderData} currentSlide={currentSlide} onSlideChange={setCurrentSlide} />
            </div>

            <div className="container mx-auto p-6">
                <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
{/* ---------- help from data------- */}
            <form action="https://fabform.io/f/xxxxx" method="post" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* ------left site steaper------ */}
                        <div className="p-6  rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold font-serif text-center mb-8">Follow These Simple Steps</h3>
                            <div className="space-y-6">
                                {["Describe Your Issue", "Get a Quote", "Approve the Service Plan","Send or Bring Your Device","Get Your Device Back"].map((step, i) => (
                                    <div key={i} className="flex items-start">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                            {i + 1}
                                        </div>
                                        <div className="ml-5 bg-gray-100 p-4 rounded-lg flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900">{step}</h4>
                                            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
{/* ----------message from data------------ */}
                        <div className="bg-gray-50 p-6 lg:p-12 rounded-2xl">
                            <h2 className="text-indigo-600 text-4xl font-semibold mb-8">Send Us A Message</h2>
                            {['Name', 'Email', 'Phone Number','Service Name'].map((placeholder, i) => (
                                <input
                                    key={i}
                                    type={placeholder === 'Email' ? 'email' : 'text'}
                                    name={placeholder.toLowerCase()}
                                    placeholder={placeholder}
                                    className="w-full h-12 mb-6 pl-4 border border-gray-200 rounded-full focus:outline-none"
                                    required={placeholder !== 'Phone Number'}
                                />
                            ))}
                            <textarea
                                name="message"
                                rows="4"
                                className="w-full mb-6 p-4 border border-gray-200 rounded-xl focus:outline-none"
                                placeholder="About the issue"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full h-12 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Services;
