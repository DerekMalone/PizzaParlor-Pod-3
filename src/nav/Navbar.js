import { Link } from "react-router-dom"
import "../styles/Navbar.css";

export const NavBar = () => {
    // const navigate = useNavigate()
    // const currentUser = JSON.parse(localStorage.getItem("pizza_user"))

    return (
        <ul className="navbar">
            <li className="navbar__item">                
                <Link className="navbar__link" to="/menu">Menu</Link>
            </li>         
            <li className="navbar__item">
                <Link className="navbar__link" to="/toppings">Toppings</Link>                
            </li>   
            {/* Need a link to Order Here */}
        </ul>
    )
}