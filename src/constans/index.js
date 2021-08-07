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

const Home = React.lazy(() => import('../pages/Home'));

export const MAIN_ROUTES = [
    {
        name: 'Home',
        path: '/home',
        exact: false,
        component: Home,
    },
    {
        name: 'Products',
        path: '/catalog/:slug',
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
        name: 'Contact',
        path: '/contact',
        exact: false,
        component: Contact,
    },
    {
        name: 'PurchaseOrder',
        path: '/user',
        exact: false,
        component: PurchaseOrder,
    },
];

export const LOGIN_ROUTES = [
    {
        name: 'Login',
        path: '/login',
        component: LoginPage,
    },
    {
        name: 'Fogot Password',
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
        path: '/user/account/profile',
        exact: true,
        component: FileUser,
    },
    {
        name: 'Payment',
        path: '/user/account/payment',
        exact: false,
        component: PaymentUser,
    },
    {
        name: 'Address',
        path: '/user/account/address',
        exact: false,
        component: AddressUser,
    },
    {
        name: 'Password',
        path: '/user/account/password',
        exact: false,
        component: PasswordUser,
    },
];

export const ORDER_WHEEL = [
    {
        name: 'AllProduct',
        path: '/user/purchase/all',
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
        path: '/user/notification/order-update',
        exact: true,
        component: OrderUpdate,
    },
    {
        name: 'Promotion',
        path: '/user/notification/promotion',
        exact: false,
        component: Promotion,
    },
    {
        name: 'WalletUpdate',
        path: '/user/notification/wallet-update',
        exact: false,
        component: WalletUpdate,
    },
    {
        name: 'Work',
        path: '/user/notification/work',
        exact: false,
        component: Work,
    },
    {
        name: 'UpdatedReview',
        path: '/user/notification/updated-review',
        exact: false,
        component: UpdatedReview,
    },
];
