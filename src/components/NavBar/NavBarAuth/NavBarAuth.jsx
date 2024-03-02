//import css from "./NavBarAuth.module.css";
import { NavLink } from "react-router-dom";

const NavBarAuth = () => {
    return (
        <div>
            <NavLink to="/signup">Signup</NavLink>
            |
            <NavLink to="/login">Login</NavLink>
        </div>
    )
}

export default NavBarAuth;