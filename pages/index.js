import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Skills from "../components/skills"
import Services from "../components/services"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dimensions, setDimensions] = useState({})
  const [showHamburger, setShowHamburger] = useState(false)

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener("resize", handleResize)

    return (_) => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  console.log(
    dimensions.width,
    dimensions.height,
    showHamburger,
    dimensions.width < 764 && showHamburger == false
  )

  const hamburgerIsHidden = () =>
    dimensions.width <= 766 && showHamburger == false

  return (
    <div>
      <Head>
        <title>Paul Walker -- Professional Web Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FontAwesomeIcon
        className={
          !hamburgerIsHidden()
            ? "hidden"
            : "" + "md:hidden fixed top-0 m-2 w-4 text-gray-200 shadow-lg"
        }
        icon={faBars}
        onClick={() => setShowHamburger(true)}
      />
      <ul
        className={
          hamburgerIsHidden()
            ? "hidden"
            : "display-block" +
              ` flex text-gray-300 text-2xl w-full md:w-auto bg-gray-600 bg-opacity-40 md:bg-transparent fixed top-1 right-0 md:mr-12 z-50`
        }
      >
        <li>
          <span
            className="mr-6 ml-2 md:hidden text-gray-200"
            onClick={() => setShowHamburger(false)}
          >
            X
          </span>
        </li>
        <li>
          <a href="#services" className="flex-1 mr-6">
            Services
          </a>
        </li>
        <li>
          <a href="#work" className="flex-1 mr-6">
            Work
          </a>
        </li>
        <li>
          <a href="#skills" className="flex-1 mr-6">
            Skills
          </a>
        </li>
        <li>
          <a href="#about" className="flex-1 mr-6">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="flex-1 mr-6">
            Contact
          </a>
        </li>
      </ul>
      <div id="home" className="h-screen w-full bg-rapeseed bg-top md:bg-cover">
        <div className="bg-blue-900 w-full h-60 md:h-40">
          <div className="text-center mt-6 md:mt-2 md:text-left absolute top-6">
            <h2 className="text-white text-4xl pl-6 pt-6 w-full">
              Paul Walker
            </h2>
            <h3 className="text-white text-3xl mt-2 pl-6 w-full">
              Professional Web Development
            </h3>
          </div>
        </div>
        <div className="w-full mx-auto sm:w-4/12 h-80 sm:h-64 bg-gray-400 bg-opacity-60 absolute bottom-24 sm:left-1/3">
          <h4 className="text-2xl w-9/12 mx-auto my-6 text-center">
            Web Development & Design Services for the Modern Web.
          </h4>
          <i className="block text-2xl w-6/12 mx-auto text-center">
            Want to talk about a project?
          </i>
          <a href="#contact" className="w-full text-center absolute bottom-4">
            <button className="bg-blue-900 text-white rounded hover:bg-blue-500 px-4 py-2 focus:outline-none">
              Contact Me
            </button>
          </a>
        </div>
      </div>
      <Services/>
      <div id="work" className="h-screen w-full">
        <h2 className="text-4xl p-6">Work</h2>
      </div>
      <div
        id="about"
        className="relative min-h-screen w-full bg-skyline bg-opacity-60"
      >
        <h2 className="text-4xl p-6 z-20">About</h2>
        <div className="w-10/12 bg-gray-300 bg-opacity-90 m-8 py-4 md:absolute md:left-36 md:top-16 z-30">
          <h3 className="text-3xl m-6">Greetings!</h3>
          <p className="m-6 text-2xl">
            I am a full stack web developer living in Philadelphia. I am
            polyglot and a technologist with 10 years of experience working
            across a variety of platforms, and with a variety of individuals and
            organizations.
          </p>
          <p className="m-6 text-2xl">
            I believe that technology has the ability to transform our society
            for the better and I believe that my work has the ability to change
            peoples' lives for the better, as well. I am excited to be working
            in an ever-changing field, and am always looking forward to new
            relationships and to the next challend. I hope that we have the
            opporitunity to work together and lookg forward to meeting you, or
            to working together again!
          </p>
          <p className="m-6 text-2xl">Want to get in touch?</p>
          <p></p>
          <a
            href="#contact"
            className="block w-full text-left m-6"
          >
            <button className="bg-blue-900 text-white rounded hover:bg-blue-500 px-4 py-2 focus:outline-none">
              Contact Me
            </button>
          </a>
        </div>
      </div>
      <Skills />
      <div id="contact" className="h-screen w-full">
        <h2 className="text-4xl p-6">Contact</h2>
      </div>
    </div>
  )
}
