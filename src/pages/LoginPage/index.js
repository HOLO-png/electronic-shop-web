import React from 'react';
import PropTypes from 'prop-types';
import Helmet from '../../Components/Helmet';
import LoginForm from '../../Components/LoginForm';

function LoginPage(props) {
    return (
        <Helmet title="Login">
            <LoginForm />
        </Helmet>
    );
}

LoginPage.propTypes = {};

export default LoginPage;
