export default function Home() {
  return (
    <div id="home" className="min-h-screen w-full bg-rapeseed bg-top md:bg-cover">
      <div className="bg-blue-900 w-full h-60 md:h-40">
        <div className="text-center mt-6 md:mt-2 md:text-left absolute top-6">
          <h2 className="text-white text-4xl pl-6 pt-6 w-full">Paul Walker</h2>
          <h3 className="text-white text-3xl mt-2 pl-6 w-full">
            Professional Web Development
          </h3>
        </div>
      </div>
        <div className="relative w-full md:w-4/12 mx-auto h-3/6 md:h-96 lg:h-72 bg-gray-400 bg-opacity-60 md:mt-32">
        <h4 className="text-2xl w-9/12 mx-auto pt-6 mb-6 text-center">
          Web Development & Design Services for the Modern Web.
        </h4>
        <i className="block text-2xl w-6/12 h-48 mx-auto text-center">
          Want to talk about a project?
        </i>
        <a href="#contact" className="w-full text-center absolute bottom-4">
          <button className="bg-blue-900 text-white rounded hover:bg-blue-500 px-4 py-2 focus:outline-none">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  )
}
