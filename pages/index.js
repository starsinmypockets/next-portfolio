import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Menu from "../components/menu"
import Home from "../components/home"
import Services from "../components/services"
import Work from "../components/work"
import Skills from "../components/skills"
import About from "../components/about"
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
    <div>
      <Head>
        <title>Paul Walker -- Professional Web Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu dimensions={dimensions} />
      <Home />
      <Services />
      <Work />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}
