import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom"; 
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors';

const HomePage = () => {
    const isLogin = useSelector(selectIsLogin);
    const token = useSelector(selectToken);

    if (!isLogin && !token) {
        <Navigate to="/"/>
    }

    return (
     <Navigate to="my-contacts"/>
    )
}

export default HomePage;


