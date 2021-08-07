import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { LOGIN_ROUTES, MAIN_ROUTES, NOTFOUND_ROUTES } from '../../constans';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '../../Common/Layout';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import LoginLayout from '../../Common/LoginLayout';
import NotFound from '../NotFound';
import NotFoundLayout from '../../Common/NotFound';
import AuthProvider from '../../Context/AuthProvider';

function App() {
    const renderNotFound = () => {
        let xhtml = null;
        xhtml = NOTFOUND_ROUTES.map((route, index) => {
            return (
                <NotFoundLayout
                    name={route.name}
                    key={index}
                    component={route.component}
                    path={route.path}
                />
            );
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
            <div className="container">
                <Header />
                <div className="main">
                    {renderAdminRoute()}
                    {/* {renderNotFound()} */}
                </div>
            </div>
            <Footer />
        </>
    );

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <AuthProvider>
                    <ToastContainer />
                    <Switch>
                        <Redirect exact from="/" to="home" />
                        {renderLoginRoute()}
                        {renderMain()}
                    </Switch>
                </AuthProvider>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
