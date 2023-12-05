import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Project"

import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Project />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
