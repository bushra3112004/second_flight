import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return (
        <div className="navbar-container">
            <Link to="/" className="nav-menu">Home</Link>
            <Link to="/about" className="nav-menu">About</Link>
            <Link to="/contact" className="nav-menu">Contact</Link>

        </div>
    )
}
export default Navbar