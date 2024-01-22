import { useState } from "react"
import { IoClose, IoMenu } from "react-icons/io5"
import { Link, NavLink } from "react-router-dom"
import "../styles/Navbar.css"
export default function Navbar() {
    const [menu, setMenu] = useState(false)

    function handleMenu() {
        setMenu((prevMenu) => !prevMenu)
    }

    const menuClass = menu ? "appear" : "disappear"
    return (
        <nav className="mobile-nav">
            <IoMenu onClick={handleMenu} className="burger" />
            <div className="navs">
                <Link to="/" className="aly">
                    Aly.dev
                </Link>

                <div className={`nav-elements ${menuClass}`}>
                    <IoClose onClick={handleMenu} className="close" />
                    <NavLink className={({ isActive }) => (isActive ? "active" : null)} end to="/" onClick={() => setMenu(false)}>
                        Home
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="about" onClick={() => setMenu(false)}>
                        About
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="projects" onClick={() => setMenu(false)}>
                        Projects
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
