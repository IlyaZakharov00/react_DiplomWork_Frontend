import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getCatalogSlice from '../redux/slices/getCatalogSlice';
import imgHeader from '../static_files/img/header-logo.png';

export const Header = () => {
    const cart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();

    const { products } = cart;

    const clickHendlerSearchEl = () => {
        const searchFormEl = document.querySelector('[data-id=search-header-form]') as HTMLFormElement;
        const inputEl = searchFormEl?.querySelector('input') as HTMLInputElement;
        const navBarItem = document.getElementById("catalog") as HTMLLIElement;
        const catalogBtn = navBarItem?.querySelector('.nav-NavLink') as HTMLLinkElement;

        if (!inputEl.value) {
            searchFormEl?.classList.toggle("invisible");
            inputEl?.focus();
        } else {
            searchFormEl?.classList.toggle("invisible");
            dispatch(getCatalogSlice.actions.searchInCatalog(inputEl.value));
            inputEl.value = '';
            if (!catalogBtn.classList.contains("active")) catalogBtn?.click();
        }
    }

    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <NavLink className="navbar-brand" to="/react_DiplomWork_Frontend/mainPage">
                            <img src={imgHeader} alt="Bosa Noga" />
                        </NavLink>
                        <div className="collapse navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item" id='main'>
                                    <NavLink className="nav-NavLink" to="/react_DiplomWork_Frontend/mainPage">Главная</NavLink>
                                </li>
                                <li className="nav-item" id='catalog'>
                                    <NavLink className="nav-NavLink" to="/react_DiplomWork_Frontend/catalog">Каталог</NavLink>
                                </li>
                                <li className="nav-item" id='about'>
                                    <NavLink className="nav-NavLink" to="/react_DiplomWork_Frontend/about">О магазине</NavLink>
                                </li>
                                <li className="nav-item" id='contacts'>
                                    <NavLink className="nav-NavLink" to="/react_DiplomWork_Frontend/contacts">Контакты</NavLink>
                                </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={clickHendlerSearchEl}></div>
                                    <NavLink to='/react_DiplomWork_Frontend/cartPage' className="header-controls-pic header-controls-cart">
                                        {products.length !== 0 ? <div className="header-controls-cart-full">{products.length}</div> : null}
                                        <div className="header-controls-cart-menu"></div>
                                    </NavLink>
                                </div>
                                <form data-id="search-header-form" className="header-controls-search-form form-inline invisible">
                                    <input className="form-control" placeholder="Поиск" />
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}