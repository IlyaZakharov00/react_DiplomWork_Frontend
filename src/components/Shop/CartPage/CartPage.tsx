import { useSelector } from 'react-redux';
import { Banner } from '../Banner/Banner';
import { MakeOrder } from '../MakeOrder/MakeOrder';
import { CartItem } from '../CartItem/CartItem';
import { TCartItem } from '../types/CartItem';

export const CartPage = () => {
    const cart = useSelector((state: any) => state.cart);
    let sum;
    let { products } = cart;
    let prices: number[] = [];

    if (products.length !== 0) {
        products.forEach((item: TCartItem) => {
            prices.push(Number(item.price) * Number(item.countProducts));
        });
        sum = prices.reduce((firstItem, secondItem) => firstItem + secondItem);
    }

    return (
        <main className="container" >
            <div className="row">
                <div className="col">
                    <Banner />
                    <section className="cart">
                        <h2 className="text-center">Корзина</h2>
                        {products.length === 0 ?
                            <div>Корзина пуста {':('}</div>
                            : <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Название</th>
                                        <th scope="col">Размер</th>
                                        <th scope="col">Кол-во</th>
                                        <th scope="col">Стоимость</th>
                                        <th scope="col">Итого</th>
                                        <th scope="col">Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item: TCartItem, index: number) => <CartItem item={item} indexProduct={index} key={index} />)}
                                    <tr>
                                        <td colSpan={5} className="text-right">Общая стоимость</td>
                                        <td>{sum} руб.</td>
                                    </tr>
                                </tbody>
                            </table>
                        }
                    </section>
                    <MakeOrder />
                </div>
            </div >
        </main>
    )
}