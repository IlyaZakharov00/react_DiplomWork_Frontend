import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCatalogItemsMore } from '../redux/async action/getLoadMoreItems';
import { TCatalogCategoriesItem } from '../types/CatalogCategoriesItem';
import { TCatalogItem } from '../types/CatalogItem';
import { CatalogCategoriesItem } from '../CatalogCategoriesItem/CatalogCategoriesItem';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { Loading } from '../Loading/Loading';
import { ServerError } from '../ServerError/ServerError';
import { SearchInCatalog } from '../SearchInCatalog/SearchInCatalog';
import { useNavigate } from 'react-router-dom';

export const Catalog = () => {
    const catalog = useSelector((state: any) => state.catalog);
    const bestSellers = useSelector((state: any) => state.bestSellers);
    const { searchInCatalog, categories, items, moreItems, loadingCategories, loadingItems, loadingItemsMore, errorCategories, errorItems, errorItemsMore } = catalog;
    const { bestSellersArray } = bestSellers;
    const allItems = [...items, ...bestSellersArray];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadMore = () => {
        const categoriesList = document.querySelector('.catalog-categories');
        const categorieActive = categoriesList?.querySelector(".active")?.getAttribute('id');
        dispatch(fetchCatalogItemsMore(categorieActive));
    }

    useEffect(() => {
        navigate('/react_DiplomWork_Frontend/mainPage/categorieID/all');
    }, [])

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {loadingCategories || loadingItems ? <Loading /> :
                <>
                    {errorCategories || errorItems ? <ServerError /> :
                        <>
                            <SearchInCatalog />
                            <ul className="catalog-categories nav justify-content-center">
                                {categories.map((item: TCatalogCategoriesItem, index: number) => <CatalogCategoriesItem categorie={item} key={index} />)}
                            </ul>
                            <div className="row">
                                {searchInCatalog ?
                                    allItems.map((item: TCatalogItem, index: number) => item.title.toLowerCase().indexOf(searchInCatalog) >= 0 ? <CatalogItem item={item} key={index} /> : null) :
                                    items.map((item: TCatalogItem, index: number) => <CatalogItem item={item} key={index} />)}
                            </div >
                        </>
                    }
                    {loadingItemsMore ? <Loading /> :
                        <>
                            {errorItemsMore ? <ServerError /> : moreItems.length < 6 ? <></> :
                                <div className="text-center">
                                    <button className="btn btn-outline-primary" onClick={loadMore}>Загрузить ещё</button>
                                </div>
                            }
                        </>
                    }
                </>
            }
        </section>
    )
}