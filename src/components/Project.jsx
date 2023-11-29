import "../styles/Project.css"
import projects from "../projects.js"
import Language from "./Language"
import "../styles/Language.css"
import { FaGithub } from "react-icons/fa"
import { LuExternalLink } from "react-icons/lu"

export default function Project() {
    const projectEls = projects.map((project) => (
        <div className="project-list" key={project.id}>
            <div className="proj-img">
                <a target="_blank" rel="noreferrer" href={project.link}>
                    <img className="project-img" src={project.img} alt="random blog pic" />
                </a>
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
                <div className="boxes">
                    <Language>{project.used[0].prog}</Language>
                    <Language>{project.used[0].css}</Language>
                </div>
                <div className="links">
                    <div className="btns-box">
                        <p className="code">Code</p>
                        <a target="_blank" rel="noreferrer" href={project.code}>
                            <FaGithub className="link" />
                        </a>
                    </div>
                    <div className="btns-box">
                        <p className="live">Live Demo</p>
                        <a target="_blank" rel="noreferrer" href={project.link}>
                            <LuExternalLink className="link" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ))

    return <div className="project">{projectEls}</div>
}
