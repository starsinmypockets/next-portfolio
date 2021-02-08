import {
  faArrowRight,
  faArrowLeft,
  faCoffee,
  faPaperPlane,
  faMap,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons"
import {
  faWordpress,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react'

const items = [
  {
    icon: faWordpress,
    title: "Wordpress",
    desc: "Custom Wordpress development, hosting, and support",
  },
  {
    icon: faReact,
    title: "React",
    desc: "Responsive front-end development.",
  },
  {
    icon: faNode,
    title: "Node JS",
    desc: "Server-side (and Serverless!) Javascript",
  },
  {
    icon: faPaperPlane,
    title: "Data Visualization",
    desc: "Data dashboards, pipelines, and insights",
  },
  {
    icon: faMap,
    title: "Geospatial",
    desc: "D3, Leaflet, and a variety of Geospatial platforms",
  },
  {
    icon: faDatabase,
    title: "Back End",
    desc: "Other back end technologies including Python",
  },
]


export default function Home(props) {
  const {dimensions} = props
  const isMobile = dimensions.width < 766
  const itemsToShow = isMobile ? 1 : 3
  const [i, ii] = useState(0)

  return (
    <div id="home">
      <div className="w-full h-60 md:h-40 bg-saturn-top relative">
        <img src="/me_round_glasses_square.jpg"
          alt="Paul Walker"
          className="h-32 rounded-full absolute md:top-24 ml-4"
        />
        <div className="text-center mt-6 md:mt-2 md:text-left absolute bottom-2">
          <h1 className="text-5xl text-green-500 font-black ml-40">Paul Walker</h1>
        </div>
      </div>
        <h2 className="text-3xl text-black font-black mt-2 ml-40 w-full">
          Professional Web Development
        </h2>
      <div className="flex w-full px-24 mt-0 md:pt-12">
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
        <div className="w-full flex-auto grid grid-cols-1 md:grid-cols-3 mx-24 text-center md:text-left">
          {items.slice(i, i + itemsToShow).map((item) => {
            return (
              <div className="mt-12 text-center">
                <div className="h-28">
                  <FontAwesomeIcon className="w-24 m-auto text-green-500" icon={item.icon} />
                </div>
                <h2 className="text-4xl">{item.title}</h2>
                <lead className="text-2xl">{item.desc}</lead>
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
        <div className="w-full mx-auto text-center">
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

      <div className="w-full h-30 md:h-40 bg-saturn-bottom"></div>
    </div>
  )
}
