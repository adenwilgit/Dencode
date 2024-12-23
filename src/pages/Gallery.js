function Gallery() {
  return (
    <div className="min-h-[calc(80vh-200px)] bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Add your gallery items here */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src="/adi gtm.jpg" alt="Gallery item 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Adidas Gt Manchester</h2>
              <p className="text-gray-800 font-semibold text-lg">Price: <span className="text-green-600 font-bold">Rp.5.000.000</span></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src="/adi gazelle adv.jpg" alt="Gallery item 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Adidas Gazelle Adv</h2>
              <p className="text-gray-800 font-semibold text-lg">Price: <span className="text-green-600 font-bold">Rp.1.900.000</span></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src="/adi handball spezial night indigo.jpg" alt="Gallery item 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Adidas Handball Spezial Night Indigo</h2>
              <p className="text-gray-800 font-semibold text-lg">Price: <span className="text-green-600 font-bold">Rp.2.360.000</span></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src="/adi handball spezial collegiate navy clear sky-blue.jpg" alt="Gallery item 4" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Adidas Handball Spezial Collegiate Navy Clear Sky-Blue</h2>
              <p className="text-gray-800 font-semibold text-lg">Price: <span className="text-green-600 font-bold">Rp.2.400.000</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;