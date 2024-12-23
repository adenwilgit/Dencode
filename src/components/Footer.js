function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-1 sm:col-span-2">
            <h2 className="text-3xl font-bold mb-3 text-black">Gartig Sply</h2>
            <p className="text-black mb-4 text-lg">Discover amazing content and services tailored just for you.</p>
            <div className="flex space-x-4">
              <span className="text-black hover:text-gray-600 transition duration-300 cursor-pointer text-xl">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span className="text-black hover:text-gray-600 transition duration-300 cursor-pointer text-xl">
                <i className="fab fa-twitter"></i>
              </span>
              <span className="text-black hover:text-gray-600 transition duration-300 cursor-pointer text-xl">
                <i className="fab fa-instagram"></i>
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li><span className="text-black hover:text-gray-600 transition duration-300 cursor-pointer text-lg">Home</span></li>
              <li><span className="text-black hover:text-gray-600 transition duration-300 cursor-pointer text-lg">About</span></li>
              <li><span className="text-black hover:text-gray-600 transition duration-300 cursor-pointer text-lg">Gallery</span></li>
              <li><span className="text-black hover:text-gray-600 transition duration-300 cursor-pointer text-lg">Contact</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">Contact Us</h3>
            <p className="text-black mb-1 text-lg">Kapten Dasuki Bakri Street</p>
            <p className="text-black mb-1 text-lg">Bogor-16630</p>
            <p className="text-black mb-1 text-lg">Phone: (62) 881-0823-09778</p>
            <p className="text-black text-lg">Email: adenwildanzamzami@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-6 pt-6 text-center">
          <p className="text-black text-lg">&copy; 2024 Gartig Sply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;