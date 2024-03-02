import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import RegisterForm from "components/RegisterForm/RegisterForm";
import { signup } from "../../redux/auth/auth-operations";
import { selectAuthLoading, selectAuthError, selectIsLogin } from "../../redux/auth/auth-selectors";

const RegisterPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    const isLogin = useSelector(selectIsLogin);

    const dispatch = useDispatch();

    const handleSignUp = data => {
        dispatch(signup(data));
    }

    if (isLogin) {
        return <Navigate to='/my-contacts' />
    }
    return (
        <>
            <p>Please Sign Up</p>
            {authLoading && <p>...Loading</p>}
            <RegisterForm onSubmit={handleSignUp} />
            {authError && <p style={{ color: "red" }}>{authError}</p>}
        </>
    )
}

export default RegisterPage;