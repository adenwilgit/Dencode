import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-40\9 text-gray-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-24">
          <div className="flex items-center justify-between w-full">  
          <Link to="/" className="flex-shrink-0 transition duration-300 transform hover:scale-105 mr-auto">
            <img className="h-14 w-14 rounded-full border-2 border-white" src="/daun.jpg" alt="Logo" />
          </Link>
            <div className="space-x-7">
              <Link to="/" className="text-purple-700 hover:text-purple-900 px-6 py-4 rounded-md text-lg font-semibold transition duration-300 ease-in-out hover:bg-opacity-25 hover:bg-purple-200">Home</Link>
              <Link to="/gallery" className="text-purple-700 hover:text-purple-900 px-6 py-4 rounded-md text-lg font-semibold transition duration-300 ease-in-out hover:bg-opacity-25 hover:bg-purple-200">Gallery</Link>
              <Link to="/about" className="text-purple-700 hover:text-purple-900 px-6 py-4 rounded-md text-lg font-semibold transition duration-300 ease-in-out hover:bg-opacity-25 hover:bg-purple-200">About</Link>
              <Link to="/contact" className="text-purple-700 hover:text-purple-900 px-6 py-4 rounded-md text-lg font-semibold transition duration-300 ease-in-out hover:bg-opacity-25 hover:bg-purple-200">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
