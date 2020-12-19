import {
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

export default function Skills() {
  return (
    <div id="skills" className="w-full bg-blue-900 text-white">
      <h2 className="text-4xl p-6">Skills</h2>
      <p className="text-xl p-6">With ten years of experience in the trade, I have worked with a variety of technologies and kept up with the ever-changing landscape of the internet. Here are just a few of my key proficiencies.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 text-center pb-12">
        {items.map((item) => (
          <div className="mt-12">
            <div className="h-28">
              <FontAwesomeIcon className="w-24 m-auto" icon={item.icon} />
            </div>
            <h2 className="text-4xl mb-4">{item.title}</h2>
            <lead className="text-2xl">{item.desc}</lead>
          </div>
        ))}
      </div>
    </div>
  )
}
