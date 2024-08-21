import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BestSellersItem } from '../BestSellersItem/BestSellersItem';
import { TBestSellersItem } from '../types/BestSellersItem';
import { ServerError } from '../ServerError/ServerError';
import { fetchBestSellers } from '../redux/async action/getBestSellersFetch';
import { fetchCatalogCategories } from '../redux/async action/getCatalogCategoriesFetch';
import { fetchCatalogItems } from '../redux/async action/getCatalogItemsFetch';
import { Loading } from '../Loading/Loading';
import { Banner } from '../Banner/Banner';
import { Catalog } from '../Catalog/Catalog';
import getCatalogSlice from '../redux/slices/getCatalogSlice';

export const MainPage = () => {
    const bestSellers = useSelector((state: any) => state.bestSellers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBestSellers());
        dispatch(fetchCatalogCategories());
        dispatch(fetchCatalogItems('all'));
        dispatch(getCatalogSlice.actions.searchInCatalog(''));
    }, []);

    return (
        <>
            <main className="container">
                <Banner />
                <section className="top-sales">
                    <h2 className="text-center">Хиты продаж!</h2>
                    {bestSellers.loading ? <Loading /> :
                        <div className="row" style={{ justifyContent: 'center' }}>
                            {bestSellers.error ? <ServerError /> :
                                <>{bestSellers.bestSellersArray.map((item: TBestSellersItem, index: number) =>
                                    <BestSellersItem item={item} key={index} />)}</>}
                        </div>
                    }
                </section>
                <Catalog />
            </main>
        </>
    )
}