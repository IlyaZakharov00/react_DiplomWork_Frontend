import { Link } from "react-router-dom";
import { TBestSellersProps } from "../types/BestSellersItem";

export const BestSellersItem = (props: TBestSellersProps) => {
    const { id, category, title, price, images } = props.item
    return (
        <div className="col-4" data-category={category} id={String(id)}>
            <div className="card">
                <img src={images[0]}
                    className="card-img-top img-fluid" alt={title} />
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{price} руб.</p>
                    <Link to={'productID/' + id} className="btn btn-outline-primary">Заказать</Link>
                </div>
            </div>
        </div >
    )
}