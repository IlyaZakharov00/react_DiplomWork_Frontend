import { useNavigate } from "react-router-dom";
import { Banner } from "../Banner/Banner";
import { Catalog } from "../Catalog/Catalog";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCatalogCategories } from "../redux/async action/getCatalogCategoriesFetch";
import { fetchCatalogItems } from "../redux/async action/getCatalogItemsFetch";

export const CatalogPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        navigate('/react_DiplomWork_Frontend/catalog/categorieID/all');
        dispatch(fetchCatalogCategories());
        dispatch(fetchCatalogItems());
    }, [])

    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner />
                    <Catalog />
                </div>
            </div>
        </main >
    )
}