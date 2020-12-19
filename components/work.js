import { useState } from "react"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const items = [
  {
    title: "Brightpoint Health",
    description:
      "Updated Brightpoint Health clinic's site with new programming data and SEO optimization.",
    imageUrl: "/brightpoint_bupe.jpg",
    alt: "Brightpoint Health Suboxone treatment web page",
    href: "https://brightpointhealth.org/",
  },
  {
    title: "Montreal Open Data",
    description:
      "Led a team of developers working on the city of Montreal's open data portal.",
    imageUrl: "/montreal_website.png",
    alt: "Montreal open data web page",
    href: "https://donnees.montreal.ca/",
  },
  {
    title: "Georgia Board of Physicians",
    description:
      "Led development on the State of Georgia's 'Physician's Workforce Data' interactive site featuring data visualizations using React, and DKAN open data platform.",
    imageUrl: "/ga_board_of_phys.png",
    alt: "Georgia Board of Physicians web page",
    href: "https://gbpw.georgia.gov/physician-workforce-data",
  },
  {
    title: "Mt. Airy Baseball",
    description:
      "Developed online registration system featuring league statistics, game schedules, and payment system.",
    imageUrl: "/mab.jpg",
    alt: "Mt Airy Baseball home page",
    href: "https://web.archive.org/web/*/mtairybaseball.org",
  },
  {
    title: "DKAN",
    description:
      "Worked as maintainer of the DKAN open data portal.",
    imageUrl: "/dkan.png",
    alt: "DKAN home page",
    href: "http://demo.getdkan.com/",
  },
  {
    title: "React Dash",
    description:
      "Collaborated on development of in-house data visualization dashboard tool using React and D3.",
    imageUrl: "/react_dash.png",
    alt: "React Dash example dashboard",
    href: "https://github.com/NuCivic/react-dash",
  },
]

export default function Work(props) {
  const { dimensions } = props
  const isMobile = dimensions.width < 766
  const itemsToShow = isMobile ? 1 : 3
  const [i, ii] = useState(0)

  return (
    <div id="work" className="w-full p-10">
      <h2 className="text-4xl">Work</h2>
      <p className="text-xl py-6 hidden md:block">From home-grown business to state governments, I have worked with a wide variety of clients to help build and maintain their online presence.</p>
      <div className="flex w-full mt-0 md:pt-12">
        <div className="flex-auto w-8">
          {i > 0 && (
            <FontAwesomeIcon
              onClick={(e) => {
                e.preventDefault
                ii(i - 1)
              }}
              icon={faArrowLeft}
              className="mt-36 cursor-pointer"
            />
          )}
        </div>
        <div className="w-full flex-auto grid grid-cols-1 md:grid-cols-3 mx-auto text-center md:text-left">
          {items.slice(i, i + itemsToShow).map((item) => {
            return (
              <div className="m-2 md:m-8">
                <div className="h-48 md:h-96 overflow-hidden">
                  <a href={item.href} target="_blank">
                    <img src={item.imageUrl} alt={item.alt} className="w-full" />
                  </a>
                </div>
                <div className="p2 bg-white opacity-95">
                  <a href={item.href}>
                    <h3 className="text-2xl">{item.title}</h3>
                  </a>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex-auto w-8">
          {i < items.length - itemsToShow && (
            <FontAwesomeIcon
              onClick={(e) => {
                e.preventDefault
                ii(i + 1)
              }}
              icon={faArrowRight}
              className="mt-36 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="mx-auto text-center">
        {items.map((item, n) => {
          const isBlue = i + itemsToShow >= n + 1 && n + 1 > i
          return (
            <span
              onClick={(_) => {
                const newI =
                  n + itemsToShow < items.length
                    ? n
                    : items.length - itemsToShow
                ii(newI)
              }}
              className={`inline-block m-2 w-4 h-4 rounded-full cursor-pointer ${
                isBlue ? "bg-blue-300" : "bg-gray-300"
              }`}
            >
              {" "}
            </span>
          )
        })}
      </div>
    </div>
  )
}
