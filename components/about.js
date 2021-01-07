export default function About() {
  return (
    <div
      id="about"
      className="p-10 min-h-screen bg-skyline bg-cover bg-opacity-60"
    >
      <h2 className="text-4xl z-20">About</h2>
        <div className="w-full md:w-11/12 mx-auto bg-gray-300 bg-opacity-90 m-8 md:top-36 pb-30 z-30">
        <h3 className="text-3xl m-6">Greetings!</h3>
        <p className="m-6 text-2xl">
          I am a full stack web developer living in Philadelphia. I am polyglot
          and a technologist with 10 years of experience working across a
          variety of platforms, and with a variety of individuals and
          organizations.
        </p>
        <p className="m-6 text-2xl">
          I believe that technology has the ability to transform our world for
          the better and I believe that my work has the ability to change
          peoples' lives for the better, as well. I am excited to be working in
          an ever-changing field, and am always looking forward to new
          relationships and to the next challend. I hope that we have the
          opporitunity to work together and lookg forward to meeting you, or to
          working together again!
        </p>
        <p className="m-6 text-2xl">Want to get in touch?</p>
        <p></p>
        <a href="#contact" className="block w-full text-left m-6 pb-6">
          <button className="bg-blue-900 text-white rounded hover:bg-blue-500 px-4 py-2 focus:outline-none">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  )
}
