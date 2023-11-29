/* eslint-disable react/prop-types */
import "../styles/Language.css"

export default function Language({ children, className }) {
    const colorClass = className ? "black" : null

    return <p className={`language-box ${colorClass}`}>{children}</p>
}
