function Main() {
  return (
    <div className="bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8 text-center">
          <h1 className="text-lg text-gray-700">Discover tailored content and services.</h1>
        </section>

        <section className="flex flex-col md:flex-row justify-center items-stretch gap-4">
          <div className="bg-white border-l-4 border-purple-500 shadow-sm p-3 transition duration-300 hover:shadow-md flex-1">
            <h2 className="text-lg font-semibold text-purple-700 mb-1">Featured Services</h2>
            <p className="text-m text-gray-600">Premium features for your needs.</p>
          </div>
          <div className="bg-white border-l-4 border-purple-500 shadow-sm p-3 transition duration-300 hover:shadow-md flex-1">
            <h2 className="text-lg font-semibold text-purple-700 mb-1">Best-in-Class Service</h2>
            <p className="text-m text-gray-600">Top-tier services for your satisfaction.</p>
          </div>
          <div className="bg-white border-l-4 border-purple-500 shadow-sm p-3 transition duration-300 hover:shadow-md flex-1">
            <h2 className="text-lg font-semibold text-purple-700 mb-1">24/7 Support</h2>
            <p className="text-m text-gray-600">Always ready to assist you.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;