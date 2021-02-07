import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Menu from "../components/menu"
import Home from "../components/home"
import Services from "../components/services"
import About from "../components/about"
import Work from "../components/work_slider"
import Skills from "../components/skills"
import Contact from "../components/contact"

export default function App() {
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
    <div className="font-sans">
      <Head>
        <title>Paul Walker -- Professional Web Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu dimensions={dimensions} />
      <Home />
      <Services />
      <About />
      <Work dimensions={dimensions} />
      <Skills />
      <Contact />
    </div>
  )
}
