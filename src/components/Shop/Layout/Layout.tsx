import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { backFromLC } from "../redux/slices/cartSlice"

export const Layout = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(backFromLC());
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}