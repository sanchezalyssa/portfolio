import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import "../App.css"

export default function Layout() {
    return (
        <div className="box">
            <Navbar />
            <div className="main">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
