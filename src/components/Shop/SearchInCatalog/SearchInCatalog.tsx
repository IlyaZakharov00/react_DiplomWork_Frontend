import { useState } from "react";
import { useSelector } from "react-redux";

export const SearchInCatalog = () => {

    const catalog = useSelector((state: any) => state.catalog);
    const [_searchName, setSearchName] = useState('');
    const { searchInCatalog } = catalog;

    return (
        <form data-id='catalog-search-form' className="catalog-search-form form-inline">
            <input className="form-control" placeholder="Поиск" value={searchInCatalog} onChange={(e) => setSearchName(e.target.value)} />
        </form >
    )
}