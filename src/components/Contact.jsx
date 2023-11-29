import "../styles/Contact.css"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
export default function Contact() {
    const form = useRef()
    const [submit, setSubmit] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm("service_21n7rc8", "template_jd7icst", form.current, "74MRtMUpHcR7V4UME").then(
            (result) => {
                console.log(result.text)
                setSubmit("Thank You 😎 ")
                e.target.reset()
            },
            (error) => {
                console.log(error.text)
            }
        )
    }
    return (
        <form className="form" ref={form} onSubmit={sendEmail}>
            <p className="form-title">Get in touch</p>
            <div className="input-container">
                <input type="text" name="user_name" placeholder="Enter Name" required />
                <span></span>
            </div>
            <div className="input-container">
                <input type="email" name="user_email" placeholder="Enter email" required />
                <span></span>
            </div>
            <div className="input-container">
                <textarea name="message" placeholder="Your message" />
            </div>
            <button type="submit" className="submit">
                Submit
            </button>
            <h3>{submit}</h3>
        </form>
    )
}
