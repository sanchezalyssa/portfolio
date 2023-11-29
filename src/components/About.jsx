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
                <h2>A dedicated Front-end Developer based in Quezon City, Philippines</h2>
                <p>
                    Hi, I'm Alyssa, a dedicated front-end developer. With a strong foundation in HTML, CSS, and JavaScript, I specialize in crafting
                    engaging user interfaces using React. My passion lies in creating seamless and visually appealing websites that deliver a standout
                    user experience. Proficient with version control using Git, I thrive on turning innovative ideas into reality.
                </p>
            </div>
        </div>
    )
}
