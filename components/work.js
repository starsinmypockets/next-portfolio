import { useState } from "react"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const items = [
  {
    title: "Brightpoint Health",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/brightpoint_bupe.jpg",
    href: "#",
  },
  {
    title: "Montreal Open Data",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/montreal_website.png",
    href: "#",
  },
  {
    title: "Georgia Board of Physicians",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/ga_board_of_phys.png",
    href: "#",
  },
  {
    title: "DKAN",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/dkan.png",
    href: "#",
  },
  {
    title: "DKAN",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/dkan.png",
    href: "#",
  },
  {
    title: "DKAN",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/dkan.png",
    href: "#",
  },
]

export default function Work(props) {
  const { dimensions } = props
  const isMobile = dimensions.width < 766
  const itemsToShow = isMobile ? 1 : 3
  const [i, ii] = useState(0)

  return (
    <div id="work" className="w-full">
      <h2 className="text-4xl p-6">Work</h2>
      <p className="text-xl pl-6 pb-6">From home-grown business to state governments, I have worked with a wide variety of clients to help build and maintain their online presence.</p>
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
              <div className="m-2">
                <div className="h-96">
                  <a href={item.href}>
                    <img src={item.imageUrl} className="w-full" />
                  </a>
                </div>
                <div className="">
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
