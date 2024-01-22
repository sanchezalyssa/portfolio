/* eslint-disable react/prop-types */
import "../styles/Language.css"

export default function Language({ children, className }) {
  const colorClass = className ? "language" : null

  return <p className={`${colorClass}`}>{children}</p>
}
