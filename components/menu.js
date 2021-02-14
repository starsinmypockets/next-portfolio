import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faStackOverflow,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Menu(props) {
  const [showHamburger, setShowHamburger] = useState(false)
  const hamburgerIsHidden = () =>
    props.dimensions.width <= 744 && showHamburger == false

  return (
    <div
      id="menu"
      className="w-full bg-gray-300 bg-opacity-90 fixed right-0 z-50"
    >
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
              ` float-right md:float-left text-lg flex w-48 md:w-auto md:w-auto md:mr-12`
        }
      >
        <li className="ml-4 mt-2 w-5">
          <a href="https://github.com/starsinmypockets">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="ml-4 mt-2 w-5">
          <a href="https://www.linkedin.com/in/paul-walker-24887871/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="ml-4 mt-2 w-4">
          <a href="https://stackoverflow.com/users/556443/starsinmypockets">
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </li>
        <li className="ml-4 mt-2 w-4">
          <a href="https://twitter.com/pwalk99">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="ml-4 mt-2 w-4">
          <a href="mailto:pjwalker76@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
      <ul
        className={
          hamburgerIsHidden()
            ? "hidden"
            : "display-block" +
              ` float-right flex text-lg md:text-2xl w-full md:w-auto md:mr-12`
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
        <li>
          <a
            href="/paul_walker_resume_10_2020.pdf"
            className="flex-1 mr-3 md:mr-6"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  )
}
