function Home() {
  return (
    <div className="min-h-[calc(80vh-200px)] bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-indigo-800 mb-6 animate-fade-in-down">
              This Is Gartig Sply
            </h1>
            <p className="text-xl text-gray-700 mb-8 animate-fade-in-up leading-relaxed">
              Discover our amazing collection of stylish and comfortable footwear. Find the perfect pair for every occasion and step into a world of comfort and elegance.
            </p>
            <div className="bg-white rounded-lg shadow-2xl p-6 hover:shadow-3xl transition duration-300 mb-12 border border-indigo-100 transform hover:scale-105 backdrop-filter backdrop-blur-lg bg-opacity-80">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
                Quick Links
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center group">
                  <svg className="w-5 h-5 mr-3 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <span className="group-hover:text-indigo-600 cursor-pointer transition duration-200 border-b border-transparent group-hover:border-indigo-600">Explore our latest collections</span>
                </li>
                <li className="flex items-center group">
                  <svg className="w-5 h-5 mr-3 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <span className="group-hover:text-indigo-600 cursor-pointer transition duration-200 border-b border-transparent group-hover:border-indigo-600">Read customer reviews</span>
                </li>
                <li className="flex items-center group">
                  <svg className="w-5 h-5 mr-3 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <span className="group-hover:text-indigo-600 cursor-pointer transition duration-200 border-b border-transparent group-hover:border-indigo-600">Contact our support team</span>
                </li>
                <li className="flex items-center group">
                  <svg className="w-5 h-5 mr-3 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <span className="group-hover:text-indigo-600 cursor-pointer transition duration-200 border-b border-transparent group-hover:border-indigo-600">Check our size guide</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 flex space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl">
                Shop Now
              </button>
              <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl">
                View Catalog
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img src="/adi people.jpg" alt="Featured Product" className="rounded-lg shadow-xl max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;