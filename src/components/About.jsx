/* eslint-disable react/no-unescaped-entities */
import gradPic from "/image/grad.jpg"
import "../styles/About.css"
export default function About() {
    return (
        <div className="about">
            <img src={gradPic} alt="grad pic" />
            <div className="about-info">
                <h3>ABOUT ME</h3>
                <h2>📍 Quezon City</h2>
                <p>
                    Hello, I'm a recent graduate from AMA College Fairview, passionate about front-end development. I'm excited to craft engaging user
                    experiences. Eager to contribute my skills and collaborative spirit to innovative teams. Currently seeking opportunities to grow
                    as a front-end developer.
                </p>
            </div>
        </div>
    )
}
