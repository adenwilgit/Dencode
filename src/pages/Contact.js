function Contact() {
  return (
    <div className="min-h-[calc(80vh-200px)] bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Contact Us</h1>
        <p className="text-xl text-gray-700 mb-6">
          We'd love to hear from you! Use the form below to get in touch with us.
        </p>

        <form className="bg-white rounded-lg shadow-xl p-8 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="shadow appearance-none border border-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline" required />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline" required></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;