import { Link } from "react-router-dom"
import "./styles/navbar.css";

export const NavBar = () => {
    // const navigate = useNavigate()
    // const currentUser = JSON.parse(localStorage.getItem("pizza_user"))

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/toppings">Toppings</Link>
                <Link className="navbar__link" to="/component">Component</Link>
            </li>         
        </ul>
    )
}