import NavBar from "components/NavBar/NavBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";


const SharedLayout = () => {
    return (
        <>
            <NavBar />
            <Suspense falback={<p>...Loading page</p>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default SharedLayout;