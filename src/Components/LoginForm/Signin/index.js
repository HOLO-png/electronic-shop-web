import React from 'react';
import * as Yup from 'yup';
import { FastField, Form, Formik, isEmptyChildren } from 'formik';
import { Button, FormGroup, Input, Label, Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import InputField from '../../InputField';
import { handleFbLogin, handleGgLogin } from '../../../Firebase/LoginConfig';
import { Link } from 'react-router-dom';

Signin.propTypes = {
    onSubmit: PropTypes.func,
};
Signin.defaultProps = {
    onSubmit: null,
};

function Signin(props) {
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('This field is required !'),
        password: Yup.string()
            .min(8, 'Minimum 8 characters')
            .required('This field is required !'),
    });

    const handleReset = (resetForm) => {
        if (window.confirm('Reset?')) {
            resetForm();
        }
    };
    return (
        <div className="form__container sign-in-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={props.onSubmit}
            >
                {(formikProps) => {
                    const { values, errors, touched, isSubmitting } =
                        formikProps;
                    return (
                        <Form>
                            <h1 className="form__title">Sign in</h1>
                            <div className="form__social-container">
                                <a
                                    href
                                    className="form__social"
                                    onClick={handleFbLogin}
                                >
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a
                                    href
                                    className="form__social"
                                    onClick={handleGgLogin}
                                >
                                    <i className="fab fa-google-plus-g" />
                                </a>
                            </div>
                            <span>or use your account</span>
                            <FastField
                                name="email"
                                component={InputField}
                                label="Email"
                                type="email"
                                placeholder="Email ..."
                            />
                            <FastField
                                name="password"
                                component={InputField}
                                label="Password"
                                type="password"
                                placeholder="Password ..."
                            />
                            <Link to="/forgot-password">
                                <a href="true">Forgot your password?</a>
                            </Link>
                            <FormGroup>
                                <Button type="submit" color="primary">
                                    Signin
                                </Button>
                            </FormGroup>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

Signin.propTypes = {};

export default Signin;
