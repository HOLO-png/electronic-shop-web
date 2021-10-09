import './App.css';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LOGIN_ROUTES, MAIN_ROUTES } from '../../constans';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '../../Common/Layout';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import LoginLayout from '../../Common/LoginLayout';
import AuthProvider from '../../Context/AuthProvider';
import ScrollToTop from '../../utils/scroll';
import { useDispatch, useSelector } from 'react-redux';
import { cartProductsSelector, getCartProduct } from '../../Store/Reducer/cart';
import {
    addSearchItemUserApi,
    deleteSearchItemUserApi,
    getSearchItemUserApi,
    searchItemSelector,
} from '../../Store/Reducer/searchItem';
import { handleUpdateTheme } from '../../Store/Reducer/setTheme';

function App() {
    const cartProduct = useSelector(cartProductsSelector);
    const searchItem = useSelector(searchItemSelector);
    // const themeItem = useSelector(themeSelector);

    const [theme, setTheme] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartProduct());
        dispatch(getSearchItemUserApi());
    }, [dispatch]);

    const handleChangeTheme = () => {
        console.log(theme);

        dispatch(handleUpdateTheme(theme));
        theme ? setTheme(!theme) : setTheme(!theme);
    };

    const insertSearchItemUser = (data) => {
        dispatch(addSearchItemUserApi(data));
    };
    const removeSearchItem = (id) => {
        dispatch(deleteSearchItemUserApi(id));
    };
    const renderAdminRoute = () => {
        let xhtml = null;
        xhtml = MAIN_ROUTES.map((route, index) => {
            return (
                <Layout
                    name={route.name}
                    key={index}
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                />
            );
        });
        return xhtml;
    };

    const renderLoginRoute = () => {
        let xhtml = null;
        xhtml = LOGIN_ROUTES.map((route, index) => {
            return (
                <LoginLayout
                    name={route.name}
                    key={index}
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                />
            );
        });

        return xhtml;
    };

    // useEffect((nextProps, nextState) => {
    //     return nextProps.location.search === this.props.location.search;
    // }, []);

    const renderMain = () => (
        <>
            <div
                className="container"
                // style={{ background: themeItem.bgr_main }}
            >
                <Header
                    cartProduct={cartProduct}
                    searchItem={searchItem}
                    insertSearchItemUser={insertSearchItemUser}
                    removeSearchItem={removeSearchItem}
                    handleChangeTheme={handleChangeTheme}
                    // themeItem={themeItem}
                />
                <div className="main">
                    <Switch>{renderAdminRoute()}</Switch>
                </div>
            </div>
            <Footer />
        </>
    );

    return (
        <BrowserRouter>
            <ToastContainer />
            <AuthProvider>
                <ScrollToTop />
                <Switch>
                    <Redirect exact from="/" to="home" />
                    {renderLoginRoute()}
                    {renderMain()}
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
