import "../styles/Project.css"
import projects from "../projects.js"
import Language from "./Language"
import "../styles/Language.css"
import { FaGithub } from "react-icons/fa"
import { LuExternalLink } from "react-icons/lu"

export default function Project() {
    const projectEls = projects.map((project) => (
        <div className="project-list" key={project.id}>
            <a target="_blank" rel="noreferrer" href={project.link}>
                <img className="proj-img" src={project.img} alt={project.title} />
            </a>
            <div className="proj-detail">
                <h3 className="proj-title">{project.title}</h3>
                <p className="text-detail">{project.detail}</p>
                <div className="progs">
                    <Language className="black">{project.used[0].prog}</Language>
                    <Language className="black">{project.used[0].css}</Language>
                </div>
                <div className="links">
                    <div className="link-list">
                        <p className="link-text">Code</p>
                        <a target="_blank" rel="noreferrer" href={project.link}>
                            <FaGithub className="icon" />{" "}
                        </a>
                    </div>
                    <div className="link-list">
                        <p className="link-text">Live Demo</p>
                        <a target="_blank" rel="noreferrer" href={project.link}>
                            <LuExternalLink className="icon" />
                        </a>
                    </div>
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
