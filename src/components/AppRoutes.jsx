import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../Pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../Pages/LoginPage/LoginPage"));
const MyContactsPage = lazy(() => import("../Pages/MyContactsPage/MyContactsPage"));
const NotFoundPage = lazy(() => import("../Pages/NotFoundPage/NotFoundPage"));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<HomePage />} /> 
                <Route path="goit-react-hw-08-phonebook" element={<HomePage />}/>
                <Route element={<PublicRoute />}>
                    <Route path="signup" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} /> 
                </Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="my-contacts" element={<MyContactsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
     
    )
}

export default AppRoutes;