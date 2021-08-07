import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from '../pages/Products';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Accessories from '../pages/Accessories';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import PurchaseOrder from '../pages/PurchaseOrder';

const Home = React.lazy(() => import('../pages/Home'));

export default function MainRoutes() {
    return (
        <Switch>
            <Redirect exact from="/" to="home" />
            <Route path="/home" component={Home} />
            <Route path="/catalog/:slug" component={Products} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/accessories" component={Accessories} />
            <Route path="/contact" component={Contact} />
            <Route path="/purchase-order" component={PurchaseOrder} />

            <Route component={NotFound} />
        </Switch>
    );
}
