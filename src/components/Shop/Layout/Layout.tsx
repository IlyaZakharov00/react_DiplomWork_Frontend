import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { backFromLC } from "../redux/slices/cartSlice"

export const Layout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(backFromLC());
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
