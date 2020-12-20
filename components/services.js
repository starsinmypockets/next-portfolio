import {
  faLightbulb,
  faFlask,
  faCloud,
  faBuilding,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"
import {
  faWordpress,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const items = [
  {
    icon: faLightbulb,
    title: "Plan",
    desc: (
      <p>
        Planning is key to success in technology. The process of creation begins
        with analysis.
      </p>
    ),
  },
  {
    icon: faFlask,
    title: "Design",
    desc: (
      <p>
        Responsive design ensures good experience across the wide range of
        devices used to access the internet.
      </p>
    ),
  },
  {
    icon: faBuilding,
    title: "Build",
    desc: (
      <p>
        Development best practices informed by ten years of experience in the
        field.
      </p>
    ),
  },
  {
    icon: faCloud,
    title: "Host",
    desc: (
      <p>
        Reliable hosting and monitoring for continuous availability across the
        internet.
      </p>
    ),
  },
]

export default function Services() {
  return (
    <div
      id="services"
      className="p-10 w-full bg-blue-900 text-white"
    >
      <h2 className="text-4xl">Services</h2>
        <p className="text-xl py-6">Planning, design, and development go hand in hand. Let's work together to find an solution that meets your needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 text-center pb-12 md:px-2">
        {items.map((item, i) => (
          <div className="relative mt-20 md:mt-12 lg:mt-24">
            <div className="h-36">
              <FontAwesomeIcon className="h-36 m-auto" icon={item.icon} />
              {i + 1 < items.length && (
                <FontAwesomeIcon
                  className="hidden md:block h-12 absolute -right-2 top-16"
                  icon={faArrowRight}
                />
              )}
            </div>
            <h2 className="text-3xl mb-0 md:mb-8">{item.title}</h2>
            <div className="md:w-10/12 mx-auto my-4 text-left md:text-center text-2xl">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
