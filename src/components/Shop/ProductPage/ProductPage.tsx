import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchAboutItem } from '../redux/async action/getLoadAboutItem';
import { addProduct } from '../redux/slices/cartSlice';
import { ServerError } from "../ServerError/ServerError";
import { Loading } from "../Loading/Loading";
import { Banner } from '../Banner/Banner';

export const ProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [btnDisabled, setBtnDisable] = useState(true);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    let [countProducts, setCountProducts] = useState(1);

    useEffect(() => {
        const path = document.location.pathname.split('/');
        dispatch(fetchAboutItem(path[path.length - 1]));
    }, []);

    const aboutItem = useSelector((state: any) => state.aboutItem);
    const { infoAboutItemByID, loadingAbouTItem, errorAboutItem } = aboutItem;
    const { color, images, manufacturer, material, reason, season, sizes, sku, title, price, id } = infoAboutItemByID;
    let availableSizes = [];

    const hendlerSizeClick = (e: React.MouseEvent<HTMLElement>) => {
        setBtnDisable(false);
        disableActiveSizeNow();
        const size = e.target as HTMLElement;
        size.classList.add("selected");
        setSelectedSize(size.textContent);
        activeBtnPurchase();
    };

    const disableActiveSizeNow = () => {
        const allSizes = document.querySelectorAll(".catalog-item-size");
        let nowSelectedSize;
        for (const size of allSizes) {
            if (size.classList.contains('selected')) {
                nowSelectedSize = size;
            }
        }
        nowSelectedSize?.classList.remove("selected");
    };

    const activeBtnPurchase = () => {
        const btn = document.getElementById("btn-purchase-product") as HTMLButtonElement;
        btn.disabled = false;
    };

    const btnPurchaseClick = () => {
        const infoAboutProduct = {
            id,
            title,
            selectedSize,
            countProducts,
            price,
        };
        dispatch(addProduct(infoAboutProduct));
        navigate('/react_DiplomWork_Frontend/cartPage');
    };

    const incrementCount = () => { setCountProducts(countProducts + 1) };
    const decrementCount = () => {
        if (countProducts === 1) return;
        setCountProducts(countProducts - 1);
    };

    if (!infoAboutItemByID.id) return;

    for (const size of sizes) {
        if (size.available) availableSizes.push(size);
    };

    return (
        <>
            {loadingAbouTItem ? <Loading /> :
                errorAboutItem ? <ServerError /> :
                    infoAboutItemByID ?
                        <main className="container">
                            <div className="row">
                                <div className="col">
                                    <Banner />
                                    <section className="catalog-item">
                                        <h2 className="text-center">{title}</h2>
                                        <div className="row">
                                            <div className="col-5">
                                                <img src={images[0]} className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-7">
                                                <table className="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <td>Артикул</td>
                                                            <td>{sku}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Производитель</td>
                                                            <td>{manufacturer}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Цвет</td>
                                                            <td>{color}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Материалы</td>
                                                            <td>{material}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Сезон</td>
                                                            <td>{season}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Повод</td>
                                                            <td>{reason}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                {availableSizes.length === 0 ? <div>К сожалению, данный товар закончился {':('}</div> :
                                                    <>
                                                        <div className="text-center">
                                                            <p>Размеры в наличии: {availableSizes.map((size, index) => <span className="catalog-item-size" onClick={hendlerSizeClick} key={index}>{size.size}</span>)}</p>
                                                            <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                                                <button className="btn btn-secondary" onClick={decrementCount}>-</button>
                                                                <span className="btn btn-outline-primary">{countProducts}</span>
                                                                <button className="btn btn-secondary" onClick={incrementCount}>+</button>
                                                            </span>
                                                            </p>
                                                        </div>
                                                        <button id='btn-purchase-product' className="btn btn-danger btn-block btn-lg" onClick={btnPurchaseClick} disabled={btnDisabled}>В корзину</button>
                                                    </>}
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </main> : null
            }
        </>
    )
}