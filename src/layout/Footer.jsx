import "../styles/Footer.css"
export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return <footer>Alyssa Sanchez &copy; {year}</footer>
}
