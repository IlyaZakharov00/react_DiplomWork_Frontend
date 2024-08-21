import { NavLink } from "react-router-dom";
import { TCatalogCategoriesProps } from "../types/CatalogCategoriesItem";
import { fetchCatalogItems } from "../redux/async action/getCatalogItemsFetch";
import { useDispatch } from "react-redux";

export const CatalogCategoriesItem = (props: TCatalogCategoriesProps) => {
    const { id, title } = props.categorie;

    const dispatch = useDispatch();

    const loadItemsByCategorie = (id?: string | undefined | null) => {
        dispatch(fetchCatalogItems(id));
    };

    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={`categorieID/${id.toString()}`} id={String(id)} onClick={(() => loadItemsByCategorie(String(id)))}>{title}</NavLink>
        </li >
    )
}