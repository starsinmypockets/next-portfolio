import {
 faHandsHelping,
 faTools,
 faDesktop
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react'

const items = [
  {
    icon: faDesktop,
    title: "Web Development",
    desc: "Fusce fermentum. Curabitur nisi. Donec vitae sapien ut libero venenatis faucibus. Duis leo. Curabitur ligula sapien, tincidunt non.",
    contact: "Let's Talk!"
  },
  {
    icon: faHandsHelping,
    title: "Consulting",
    desc: "Fusce fermentum. Curabitur nisi. Donec vitae sapien ut libero venenatis faucibus. Duis leo. Curabitur ligula sapien, tincidunt non.",
    contact: "I can help!"
  },
  {
    icon: faTools,
    title: "Contracting",
    desc: "Fusce fermentum. Curabitur nisi. Donec vitae sapien ut libero venenatis faucibus. Duis leo. Curabitur ligula sapien, tincidunt non.",
    contact: "Contact me."
  },
]


export default function Home(props) {
  const {dimensions} = props
  const isMobile = dimensions.width < 766
  const itemsToShow = isMobile ? 1 : 3
  const [i, ii] = useState(0)

  return (
    <div id="home" className="border-b-2 pb-24">
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
      <div className="flex w-full p-24 mt-0 md:pt-12">
        <div className="w-full flex-auto grid grid-cols-1 md:grid-cols-3 mx-24 text-center md:text-left">
          {items.slice(i, i + itemsToShow).map((item) => {
            return (
              <div className="mt-24 px-4 text-center">
                <div className="h-28">
                  <FontAwesomeIcon className="w-24 m-auto text-green-500" icon={item.icon} />
                </div>
                <h2 className="text-4xl m-6">{item.title}</h2>
                <lead className="text-2xl">{item.desc}</lead>
                <p className="m-6">
                  <a href="#contact" className="bg-blue-900 text-white rounded hover:bg-blue-500 px-4 py-2 focus:outline-none">{item.contact}</a>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
