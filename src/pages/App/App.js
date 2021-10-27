import './App.css';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DASHBOARD_MAIN, LOGIN_ROUTES, MAIN_ROUTES } from '../../constans';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../Common/Layout';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import LoginLayout from '../../Common/LoginLayout';
import AuthProvider, { AuthContext } from '../../Context/AuthProvider';
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
import DashboardLayout from '../../Common/DashboardLayout';

function App() {
    const cartProduct = useSelector(cartProductsSelector);
    const searchItem = useSelector(searchItemSelector);
    // const themeItem = useSelector(themeSelector);
    const data = useContext(AuthContext);
    const [theme, setTheme] = useState(true);
    const dispatch = useDispatch();
    const { email } = data.user;

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

    const renderDashboardRoute = () => {
        let xhtml = null;
        xhtml = DASHBOARD_MAIN.map((route, index) => {
            if (email === 'long47004@donga.edu.vn') {
                return (
                    <DashboardLayout
                        name={route.name}
                        key={index}
                        component={route.component}
                        exact={route.exact}
                        path={route.path}
                    />
                );
            } else {
                return;
            }
        });
        return xhtml;
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
        <>
            <ToastContainer />
            <ScrollToTop />
            <Switch>
                <Redirect exact from="/" to="home" />
                {renderDashboardRoute()}
                {renderLoginRoute()}
                {renderMain()}
            </Switch>
        </>
    );
}

export default App;
