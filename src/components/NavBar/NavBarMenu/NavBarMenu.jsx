import { NavLink } from "react-router-dom";
import css from './NavBarMenu.module.css';
import menuItems from "./menuItems";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../../redux/auth/auth-selectors";

const NavBarMenu = () => {
    const isLogin = useSelector(selectIsLogin);
    const filteredMenuItems = !isLogin ? menuItems.filter(item => !item.private) : menuItems;


    const elements = filteredMenuItems.map(({id, to, name}) => (
        <li key={id}>
            <NavLink className={css.link} to={to}>{name}</NavLink>
        </li>
    ))
    return (
        <>
            <ul className={css.menu}>
                {elements}
            </ul>
        </>
    )
}

export default NavBarMenu;