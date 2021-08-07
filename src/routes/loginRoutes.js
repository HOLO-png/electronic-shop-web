import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';

export default function LoginRoutes() {
    return (
        <Switch>
            <Route path="/login" component={LoginPage} />
        </Switch>
    );
}
