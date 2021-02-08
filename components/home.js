export default function Home() {
  return (
    <div id="home">
      <div className="w-full h-60 md:h-40 bg-saturn-top relative">
        <img src="/me_round_glasses_square.jpg"
          alt="Paul Walker"
          className="h-32 rounded-full absolute md:top-24 ml-4"
        />
        <div className="text-center mt-6 md:mt-2 md:text-left absolute bottom-2">
          <h1 className="text-5xl text-green-500 font-black ml-40">Paul Walker</h1>
        </div>
      </div>
        <h2 className="text-3xl text-black font-black mt-2 ml-40 w-full">
          Professional Web Development
        </h2>

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
      <div className="w-full h-30 md:h-40 bg-saturn-bottom"></div>
    </div>
  )
}
