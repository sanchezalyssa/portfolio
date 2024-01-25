import AOS from "aos"
import "aos/dist/aos.css" //must import
import { useEffect } from "react"
import { FaGithub } from "react-icons/fa"
import { LuExternalLink } from "react-icons/lu"
import projects from "../projects.js"
import "../styles/Language.css"
import "../styles/Project.css"
import Language from "./Language"

export default function Project() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const projectEls = projects.map((project) => (
    <div data-aos="fade-right" className="project-list" key={project.id}>
      <a target="_blank" rel="noreferrer" href={project.link}>
        <img className="proj-img" src={project.img} alt={project.title} loading="lazy" />
      </a>
      <div className="proj-detail">
        <h3 className="proj-title">{project.title}</h3>
        <div className="proj-detail-div">
          <p className="text-detail">{project.detail}</p>
        </div>
        <div className="progs">
          <Language className="black">{project.used[0].prog}</Language>
          <Language className="black">{project.used[0].css}</Language>
        </div>
        <div className="links">
          <a target="_blank" rel="noreferrer" href={project.link}>
            <FaGithub className="icon" />
          </a>

          <a target="_blank" rel="noreferrer" href={project.link}>
            <LuExternalLink className="icon" />
          </a>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="project">
      <h1 className="prog-lead">Projects</h1>
      {projectEls}
    </div>
  )
}
