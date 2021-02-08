import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Slider from "react-animated-slider"

const items = [
  {
    title: "Brightpoint Health",
    description:
      "New programming data and SEO optimization.",
    imageUrl: "/brightpoint_bupe.webp",
    alt: "Brightpoint Health Suboxone treatment web page",
    href: "https://brightpointhealth.org/",
  },
  {
    title: "Montreal Open Data",
    description:
      "City of Montreal's open data portal.",
    imageUrl: "/montreal_website.webp",
    alt: "Montreal open data web page",
    href: "https://donnees.montreal.ca/",
  },
  /*{
    title: "Georgia Board of Physicians",
    description:
      "Data visualizations using React.",
    imageUrl: "/ga_board_of_phys.webp",
    alt: "Georgia Board of Physicians web page",
    href: "https://gbpw.georgia.gov/physician-workforce-data",
  }, // This image is tool tall for the slider
  {
    title: "Mt. Airy Baseball",
    description:
      "Registration and payment system.",
    imageUrl: "/mab.webp",
    alt: "Mt Airy Baseball home page",
    href: "https://web.archive.org/web/*/   // mtairybaseball.org",
  // },                                ^ interpreted as comment close
  {
    title: "DKAN",
    description:
      "Worked as maintainer of the DKAN open data portal.",
    imageUrl: "/dkan.webp",
    alt: "DKAN home page",
    href: "http://demo.getdkan.com/",
  },
  {
    title: "React Dash",
    description:
      "In-house data visualization dashboard tool using React and D3.",
    imageUrl: "/react_dash.webp",
    alt: "React Dash example dashboard",
    href: "https://github.com/NuCivic/react-dash",
  },
]

export default function Work(props) {
  return (
    <div id="work" className="p-10">
      <h2 className="text-4xl">Work</h2>
      <p className="text-xl py-6">From home-grown business to state governments, I have worked with a wide variety of clients to help build and maintain their online presence.</p>
      <div className="wrapper">
        <Slider className="slider-wrapper">
          {items.map(item => {
            return (
            <div>
              <section className="">
                <img src={item.imageUrl} alt={item.alt} className="m-auto" />
              </section>
              <div className="inner bg-transparent text-center">
                <h1 className="text-3xl">{item.title}</h1>
                <p className="text-2xl">{item.description}</p>
                  <button href={item.href} className="bg-blue-900 text-white rounded hover:bg-blue-500 px-4 py-2 focus:outline-none" onClick={() => window.location.href="#contact"}>About</button>
                  <button href={item.href} className="bg-blue-900 text-white rounded hover:bg-blue-500 px-4 py-2 focus:outline-none ml-6" onClick={() => window.location.href=item.href}>Visit site</button>
              </div>
            </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
