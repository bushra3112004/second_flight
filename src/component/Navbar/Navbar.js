import { Link } from 'react-router-dom';
import "./Navbar.css"
function Navbar() {
    return (
        <nav className="navbar-container">
            <Link to="/" className="nav-menu">Home</Link>
            <Link to="/about" className="nav-menu">About</Link>
            <Link to="/contact" className="nav-menu">Contact</Link>

        </nav>
    );
}
export default Navbar

