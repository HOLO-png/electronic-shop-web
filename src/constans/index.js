import React from 'react';

import Products from '../pages/Products';
import Catalog from '../pages/Catalog';
import Accessories from '../pages/Accessories';
import Contact from '../pages/Contact';
import PurchaseOrder from '../pages/User';
import NotFound from '../pages/NotFound';
import LoginPage from '../pages/LoginPage';
import ForgotPassword from '../Components/LoginForm/ForgotPassword';
import FileUser from '../Components/User/FileUserItem/FileUser';
import PaymentUser from '../Components/User/FileUserItem/PaymentUser';
import AddressUser from '../Components/User/FileUserItem/AddressUser';
import PasswordUser from '../Components/User/FileUserItem/PasswordUser';
import OrderUser from '../Components/User/OrderUser';

import UpdatedReview from '../Components/User/Notification/UpdatedReview';
import OrderUpdate from '../Components/User/Notification/OrderUpdate';
import Work from '../Components/User/Notification/Work';
import Promotion from '../Components/User/Notification/Promotion';
import WalletUpdate from '../Components/User/Notification/WalletUpdate';
import WheelUser from '../Components/User/WheelUser';
import Cart from '../pages/Cart';
import Mobile from '../pages/Mobile';
import Laptop from '../pages/Laptop';
import Tablet from '../pages/Tablet';
import News from '../pages/News';
import Search from '../pages/Search';
import Pay from '../pages/Pay';
import Home from '../pages/Home';
import { DashboardFilled } from '@ant-design/icons';
// const Home = React.lazy(() => import('../pages/Home'));

export const MAIN_ROUTES = [
    {
        name: 'Home',
        path: '/home',
        exact: true,
        component: Home,
    },
    {
        name: 'Products',
        path: '/:category/:name/:id',
        exact: false,
        component: Products,
    },
    {
        name: 'Catalog',
        path: '/catalog',
        exact: false,
        component: Catalog,
    },
    {
        name: 'Accessories',
        path: '/accessories',
        exact: false,
        component: Accessories,
    },
    {
        name: 'News',
        path: '/news',
        exact: false,
        component: News,
    },
    {
        name: 'PurchaseOrder',
        path: '/user',
        exact: false,
        component: PurchaseOrder,
    },
    {
        name: 'Cart',
        path: '/cart',
        exact: false,
        component: Cart,
    },
    {
        name: 'Mobile',
        path: '/mobile/:keyWork',
        exact: false,
        component: Mobile,
    },
    {
        name: 'Laptop',
        path: '/laptop/:keyWork',
        exact: false,
        component: Laptop,
    },
    {
        name: 'Tablet',
        path: '/tablet/:keyWork',
        exact: false,
        component: Tablet,
    },
    {
        name: 'OrderProducts',
        path: '/checkout/:linkText',
        exact: false,
        component: Pay,
    },
    {
        name: 'SearchProduct',
        path: '/search/:keyWord',
        exact: false,
        component: Search,
    },
    {
        name: 'NotFound',
        path: '*',
        exact: false,
        component: NotFound,
    },
];

export const LOGIN_ROUTES = [
    {
        name: 'Login',
        path: '/login',
        exact: true,
        component: LoginPage,
    },
    {
        name: 'Fogot Password',
        exact: true,
        path: '/forgot-password',
        component: ForgotPassword,
    },
];

export const NOTFOUND_ROUTES = [
    {
        name: 'NotFound',
        path: '*',
        component: NotFound,
    },
];

export const FILE_USER = [
    {
        name: 'UserAccount',
        path: '/user/profile',
        exact: true,
        component: FileUser,
    },
    {
        name: 'Payment',
        path: '/user/payment',
        exact: false,
        component: PaymentUser,
    },
    {
        name: 'Address',
        path: '/user/address',
        exact: false,
        component: AddressUser,
    },
    {
        name: 'Password',
        path: '/user/password',
        exact: false,
        component: PasswordUser,
    },
];

export const ORDER_WHEEL = [
    {
        name: 'AllProduct',
        path: '/user/all',
        exact: true,
        component: OrderUser,
    },
    {
        name: 'AllProduct',
        path: '/user/wheel',
        exact: true,
        component: WheelUser,
    },
];

export const NOTIFICATION_USER = [
    {
        name: 'OrderUpdate',
        path: '/user/order-update',
        exact: true,
        component: OrderUpdate,
    },
    {
        name: 'Promotion',
        path: '/user/promotion',
        exact: false,
        component: Promotion,
    },
    {
        name: 'WalletUpdate',
        path: '/user/wallet-update',
        exact: false,
        component: WalletUpdate,
    },
    {
        name: 'Work',
        path: '/user/work',
        exact: false,
        component: Work,
    },
    {
        name: 'UpdatedReview',
        path: '/user/updated-review',
        exact: false,
        component: UpdatedReview,
    },
];

export const DASHBOARD_MAIN = [
    {
        name: 'Dashboard Main',
        path: '/dashboard/dashboard',
        exact: true,
        component: FileUser,
    },
];
