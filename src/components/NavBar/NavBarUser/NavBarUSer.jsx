import { useSelector, useDispatch } from "react-redux";
import css from "./NavBarUser.module.css";
import { selectUser } from "../../../redux/auth/auth-selectors";
import { logout } from "../../../redux/auth/auth-operations";

const NavBarUser = () => {
    const { email } = useSelector(selectUser);
    const dispatch = useDispatch();
    
    return (
        <div className={css.block}>
            {email}
           <button className={css.logout_button} onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default NavBarUser;