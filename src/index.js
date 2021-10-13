import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import reportWebVitals from './reportWebVitals';
import './sass/index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import store, { persistor } from './Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'aos/dist/aos.css';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();