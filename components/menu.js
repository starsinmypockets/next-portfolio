import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Menu(props) {
  const [showHamburger, setShowHamburger] = useState(false)
  const hamburgerIsHidden = () =>
    props.dimensions.width <= 744 && showHamburger == false

  return (
    <div id="menu" className="w-full bg-gray-300 bg-opacity-90 fixed right-0 z-50">
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
              ` float-right flex md:text-2xl w-full md:w-auto md:mr-12`
        }
      >
        <li>
          <span
            className="mr-3 md:mr-6 ml-2 md:hidden text-gray-200"
            onClick={() => setShowHamburger(false)}
          >
            X
          </span>
        </li>
        <li>
          <a href="#services" className="flex-1 mr-3 md:mr-6">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="flex-1 mr-3 md:mr-6">
            About
          </a>
        </li>
        <li>
          <a href="#work" className="flex-1 mr-3 md:mr-6">
            Work
          </a>
        </li>
        <li>
          <a href="#skills" className="flex-1 mr-3 md:mr-6">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="flex-1 mr-3 md:mr-6">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}
