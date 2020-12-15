import { faCoffee, faPaperPlane, faMap, faDatabase} from "@fortawesome/free-solid-svg-icons"
import { faWordpress, faReact, faNode } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Skills() {
  return (
    <div id="skills" className="w-full bg-blue-900 min-h-screen p-6 text-white">
      <h2 className="text-4xl">Skills</h2>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 md:h-screen text-center pb-12 px-24">
          <div className="mt-12">
            <FontAwesomeIcon className="w-16 m-auto" icon={faWordpress} />
            <h2 className="text-3xl">Wordpress</h2>
              <lead className="text-1xl">Custom Wordpress development, hosting, and support.</lead>
          </div>
          <div className="mt-12">
            <FontAwesomeIcon className="w-14 m-auto" icon={faReact} />
            <h2 className="text-3xl">React</h2>
              <lead className="text-1xl">Creative frontend solutions, hosting, and intgration.</lead>
          </div>
          <div className="mt-12">
            <FontAwesomeIcon className="w-14 m-auto" icon={faNode} />
            <h2 className="text-3xl">NodeJS</h2>
              <lead className="text-1xl">Serverside javascript. APIs, services, and more.</lead>
          </div>
          <div className="mt-12">
            <FontAwesomeIcon className="w-14 m-auto" icon={faPaperPlane} />
            <h2 className="text-3xl">Data Visualization</h2>
              <lead className="text-1xl">Data dashboards, pipelines, and insights.</lead>
          </div>
          <div className="mt-12">
            <FontAwesomeIcon className="w-14 m-auto" icon={faMap} />
            <h2 className="text-3xl">Geospatial</h2>
              <lead className="text-1xl">Lorem ipsum dolor set foobar goobledygock words.</lead>
          </div>
          <div className="mt-12">
            <FontAwesomeIcon className="w-14 m-auto" icon={faDatabase} />
            <h2 className="text-3xl">Backend</h2>
              <lead className="text-1xl">Lorem ipsum dolor set foobar goobledygock words.</lead>
          </div>
        </div>
      </div>
    </div>
  )
}
