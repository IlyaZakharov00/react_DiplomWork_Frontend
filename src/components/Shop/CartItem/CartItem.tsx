import { useDispatch } from "react-redux";
import { TCartProps } from "../types/CartItem";
import { deleteProduct } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export const CartItem = (props: TCartProps) => {
    const { countProducts, price, selectedSize, title, id } = props.item;
    const indexProduct = props.indexProduct;
    const dispatch = useDispatch();

    const deleteItem = (index: number) => {
        dispatch(deleteProduct(index));
    };

    return (
        <tr>
            <td scope="row">{indexProduct + 1}</td>
            <td><Link to={`productID/` + id} >{title}</Link></td>
            <td>{selectedSize}</td>
            <td>{countProducts}</td>
            <td>{price}</td>
            <td>{price * countProducts}</td>
            <td><button className="btn btn-outline-danger btn-sm" onClick={() => deleteItem(indexProduct)}>Удалить</button></td>
        </tr>
    )
}