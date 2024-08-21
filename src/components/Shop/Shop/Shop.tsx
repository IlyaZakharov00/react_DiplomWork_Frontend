import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "../AboutPage/AboutPage";
import { CatalogPage } from "../CatalogPage/CatalogPage";
import { ContactsPage } from "../ContactsPage/ContactsPage";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { MainPage } from "../MainPage/MainPage";
import { ProductPage } from "../ProductPage/ProductPage";
import { Layout } from "../Layout/Layout";
import { CartPage } from "../CartPage/CartPage";

export const Shop = () => {

    return (
        <Routes>
            <Route path="/react_DiplomWork_Frontend" element={<Navigate to={'mainPage/categorieID/all'} />} />

            <Route path="/react_DiplomWork_Frontend" element={<Layout />}>

                <Route path="/react_DiplomWork_Frontend/mainPage" element={<MainPage />} >
                    <Route path='categorieID/all' element={<MainPage />} />
                    <Route path='categorieID/:id' element={<MainPage />} />
                </Route>

                <Route path="/react_DiplomWork_Frontend/catalog" element={< CatalogPage />} >
                    <Route path='categorieID/all' element={<CatalogPage />} />
                    <Route path='categorieID/:id' element={<CatalogPage />} />
                </Route>

                <Route path='/react_DiplomWork_Frontend/mainPage/productID/:id' element={<ProductPage />} />
                <Route path='/react_DiplomWork_Frontend/catalog/productID/:id' element={<ProductPage />} />
                <Route path='/react_DiplomWork_Frontend/cartPage/productID/:id' element={<ProductPage />} />

                <Route path='/react_DiplomWork_Frontend/about' element={<AboutPage />} />
                <Route path='/react_DiplomWork_Frontend/contacts' element={<ContactsPage />} />

                <Route path='/react_DiplomWork_Frontend/cartPage' element={<CartPage />} />

                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes >
    )
}