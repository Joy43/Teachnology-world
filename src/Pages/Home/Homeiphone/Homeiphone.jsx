import useHome from '../../../Hooks/usehome';
import Homeiphonecard from './HomeIphonecaard/Homeiphonecard';

const Homeiphone = () => {
  const [products] = useHome();
  const laptopProducts = products.filter(item => item.category === 'laptops');

  return (
    <section className="bg-gray-900">
      {/* Hero Banner */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-36 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/Wp1P4wz/serwin365-0c-G-y-QAd-YIM-unsplash.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 mix-blend-multiply"></div>

        <div className="relative max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            Get Tech Products
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide leading-relaxed max-w-3xl mx-auto">
            Discover the world’s top-ranking technology products and find the
            best gadgets around the globe.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 md:px-6 py-14 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {laptopProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-400 text-lg">
            No laptops available at the moment.
          </p>
        ) : (
          laptopProducts.map(item => (
            <Homeiphonecard key={item.id} product={item} />
          ))
        )}
      </div>
    </section>
  );
};

export default Homeiphone;
