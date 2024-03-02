import { useSelector, useDispatch } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { selectAuthLoading, selectAuthError } from '../../redux/auth/auth-selectors';
import { login } from '../../redux/auth/auth-operations';


//import css from './LoginPage.module.css';

const LoginPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(login(data));
    }

    return (
        <>
            <p>Please Log In</p>
            {authLoading && <p>...Loading</p>}
            <LoginForm onSubmit={handleLogin} />
            {authError && <p style={{ color: "red" }}>{authError}</p>}
        </>
    )
}

export default LoginPage;