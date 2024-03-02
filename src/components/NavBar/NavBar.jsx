import css from "./Navbar.module.css";
import NavBarAuth from "./NavBarAuth/NavBarAuth";
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import { useSelector} from "react-redux";
import NavBarUser from "./NavBarUser/NavBarUSer";
import { selectIsLogin } from "../../redux/auth/auth-selectors";

const NavBar = () => {
    const isLogin = useSelector(selectIsLogin);

    return (
        <navbar className={css.navbar}>
            <NavBarMenu />
            {isLogin ? <NavBarUser/> : <NavBarAuth />} 
        </navbar>
    )
}

export default NavBar;