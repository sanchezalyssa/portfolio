/* eslint-disable react/no-unescaped-entities */
import "../styles/Home.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import bootstrap from "../assets/bootstrap.png"
export default function Home() {
    return (
        <div className="home">
            <img width={300} src="https://avatar.iran.liara.run/public/93" alt="avatar" />
            <div className="about-me">
                <h1>Front-End</h1>
                <h1>Developer 👋</h1>

                <p>
                    Hey there! I'm Alyssa, a front-end developer who loves turning ideas into web magic. Proficient in HTML, CSS, and JavaScript, with
                    a focus on React
                </p>
                <div className="icons">
                    <a className="social" target="_blank" rel="noreferrer" href="https://github.com/sanchezalyssa">
                        <FaGithub className="social" to />
                    </a>
                    <a className="social" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alyssa-sanchez-061a5a265/">
                        <FaLinkedin className="social" />
                    </a>
                </div>
                <div className="tech">
                    <div className="tech-title">
                        <h3>Tech Stack</h3>
                    </div>
                    <div className="tech-img">
                        <img src={html} alt="html" />
                        <img src={css} alt="css" />
                        <img src={js} alt="html" />
                        <img src={react} alt="react" />
                        <img src={bootstrap} alt="bootsrap" />
                    </div>
                </div>
            </div>
        </div>
    )
}
