import { useState } from "react"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const items = [
  {
    title: "Image 1",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/tree.jpeg",
  },
  {
    title: "Image 2",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/tree.jpeg",
  },
  {
    title: "Image 3",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/tree.jpeg",
  },
  {
    title: "Image 4",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/tree.jpeg",
  },
  {
    title: "Image 5",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/tree.jpeg",
  },
  {
    title: "Image 6",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/tree.jpeg",
  },
  {
    title: "Image 7",
    description:
      "Fusce convallis metus id felis luctus adipiscing. Vestibulum volutpat pretium libero. Curabitur blandit mollis lacus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    imageUrl: "/tree.jpeg",
  },
]

export default function Work(props) {
  const { dimensions } = props
  const isMobile = dimensions.width < 766
  const itemsToShow = isMobile ? 1 : 3
  const [i, ii] = useState(0)

  return (
    <div id="work" className="h-screen w-full">
      <h2 className="text-4xl p-6">Work</h2>
      <div className="flex w-full mt-0 md:pt-12">
        <div className="flex-auto w-8">
          {i > 0 && (
            <FontAwesomeIcon
              onClick={(e) => {
                e.preventDefault
                ii(i - 1)
                console.log(i)
              }}
              icon={faArrowLeft}
              className="mt-36 cursor-pointer"
            />
          )}
        </div>
        <div className="w-full flex-auto grid grid-cols-1 md:grid-cols-3 mx-auto">
          {items.slice(i, i + itemsToShow).map((item) => {
            return (
              <div className="m-2 h-full">
                <img src={item.imageUrl} className="w-full mh-90" />
                <h3 className="text-2xl">{item.title}</h3>
                <p>{item.description}</p>
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
                console.log(i)
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
          console.log(i + itemsToShow, n + 1, i, isBlue)
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
