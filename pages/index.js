import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FontAwesomeIcon
        className={!hamburgerIsHidden() ? 'hidden' : '' + "md:hidden fixed top-0 m-2 text-gray-200"}
        icon={faBars}
        onClick={() => setShowHamburger(true)}
      />
      <ul
        className={
          hamburgerIsHidden()
            ? "hidden"
            : "display-block" +
              ` flex w-full md:w-auto bg-gray-600 bg-opacity-40 md:bg-transparent fixed top-1 right-0 md:mr-12`
        }
      >
        <li>
          <span
            className="mr-4 ml-2 md:hidden text-gray-200"
            onClick={() => setShowHamburger(false)}
          >
            X
          </span>
        </li>
        <li>
          <a href="#work" className="flex-1 mr-4">
            Work
          </a>
        </li>
        <li>
          <a href="#about" className="flex-1 mr-4">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="flex-1 mr-4">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="flex-1 mr-4">
            Contact
          </a>
        </li>
      </ul>
      <div id="home" className="h-screen w-full bg-skyline bg-cover">
        <div className="h-screen w-full bg-gray-800 bg-opacity-80">
          <h2 className="text-4xl p-6">Home</h2>
        </div>
      </div>
      <div id="work" className="h-screen w-full">
        <h2 className="text-4xl p-6">Work</h2>
      </div>
      <div id="about" className="h-screen w-full">
        <h2 className="text-4xl p-6">About</h2>
      </div>
      <div id="services" className="h-screen w-full">
        <h2 className="text-4xl p-6">Services</h2>
      </div>
      <div id="contact" className="h-screen w-full">
        <h2 className="text-4xl p-6">Contact</h2>
      </div>
    </div>
  )
}
