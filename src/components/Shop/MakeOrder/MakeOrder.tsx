import { useDispatch, useSelector } from "react-redux"
import { fetchMakePurchase } from "../redux/async action/postMakePurchase";

export const MakeOrder = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart);

    const makePurchase = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const address = document.getElementById('address') as HTMLInputElement;
        const phone = document.getElementById('phone') as HTMLInputElement;
        const { products } = cart;

        const data = {
            owner: {
                phone: phone.value,
                address: address.value,
            },
            items: products,
        }
        dispatch(fetchMakePurchase(data));
    };

    return (
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
                <form className="card-body" onSubmit={makePurchase}>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input className="form-control" id="phone" placeholder="Ваш телефон" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input className="form-control" id="address" placeholder="Адрес доставки" required />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="agreement" />
                        <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                </form>
            </div>
        </section>
    )
}