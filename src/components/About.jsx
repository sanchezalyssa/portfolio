/* eslint-disable react/no-unescaped-entities */
import "../styles/About.css"
export default function About() {
    return (
        <div className="about">
            <img
                width={380}
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="gif"
            />
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
