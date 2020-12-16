import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Menu from "../components/menu.js"
import About from "../components/about"
import Skills from "../components/skills"
import Services from "../components/services"
import Contact from "../components/contact"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dimensions, setDimensions] = useState({})

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

  console.log(dimensions.width, dimensions.height)

  return (
    <div>
      <Head>
        <title>Paul Walker -- Professional Web Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu dimensions={dimensions} />
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
      <Services />
      <div id="work" className="h-screen w-full">
        <h2 className="text-4xl p-6">Work</h2>
      </div>
      <About />
      <Skills />
      <Contact />
    </div>
  )
}
