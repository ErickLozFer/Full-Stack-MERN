import { NavLink } from "react-router-dom";
import "./Style.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="pages">
                <li className="home">
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li className="number">
                    <NavLink to="/4">Number</NavLink>
                </li>
                <li className="word">
                    <NavLink to="/hello">Word</NavLink>
                </li>
                <li className="styled">
                    <NavLink to="/hello/blue/red">Styled Word</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;