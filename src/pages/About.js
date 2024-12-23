function About() {
  return (
    <div className="min-h-[calc(80vh-200px)] bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold text-indigo-800 mb-8 text-center">About Us</h1>
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl p-8 mb-12 font-bold border border-slate-100">
          <div className="md:w-3/5 pr-8">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Welcome to our company! "Step into the Game with Adidas Casuals"
            </p>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              For the die-hard supporters who live for the atmosphere of the stands, Adidas casual shoes are more than just sneakers—they are a lifestyle.
              Designed with timeless style and comfort, these kicks are perfect for representing your team spirit on match day or embracing the casual streetwear vibe. 
              Whether you're cheering for your favorite club or enjoying a casual day out, Adidas shoes provide the perfect blend of comfort, durability, and style.
              Our collection embodies the passion of the terraces and the cool of the streets, making every step a statement of your allegiance and style.
            </p>
            <p className="text-3xl font-bold text-black-700 text-center mb-8 leading-relaxed mt-4 ml-4">
              "Look behind the goalpost, there we are, standing faithfully."
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end bg-contain">
            <img src="/adi about.jpg" alt="Tentang Kami" className="w-1/2 h-auto rounded-lg shadow-md" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
            <p className="text-gray-600">We are dedicated to providing high-quality casual shoes that combine comfort, style, and the spirit of supporters.</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Vision</h2>
            <p className="text-gray-600">To be the leading brand for supporters who express their identity through stylish, authentic casual footwear, both in the stadium and everyday life.</p>
          </div>
          <div className="bg-pink-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Our Values</h2>
            <ul className="text-gray-600 list-disc pl-5">
              <li>Quality: Prioritizing comfort and durability.</li>
              <li>Community: Celebrating the spirit of unity among supporters.</li>
              <li>Style: Offering iconic and meaningful designs.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;