import { NavLink } from "react-router-dom"
import "../styles/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/directory">Directory</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar;