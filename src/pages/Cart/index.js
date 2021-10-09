import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Helmet from '../../Components/Helmet';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    cartProductsSelector,
    deleteCartProductAllApi,
    getCartProduct,
    updateCartProduct,
} from '../../Store/Reducer/cart';
import {
    handleAddCoinsProduct,
    handleRemoveCoinsProduct,
    handleUpdateCoinsProduct,
    resetProductCoints,
    totalProductsSelector,
} from '../../Store/Reducer/totalProduct';
import Popup from '../../Components/Cart/Popup';
import CartEmpty from '../../Components/Cart/CartEmpty';
import CartItemProducts from '../../Components/Cart/CartItemProducts';
import CartSummary from '../../Components/Cart/CartSummary';
import ScaleLoader from 'react-spinners/ScaleLoader';
import SriceShock from '../../Components/SriceShock';
import { getMobilesApi, mobilesSelector } from '../../Store/Reducer/mobile_api';
import { getTabletsApi, tabletsSelector } from '../../Store/Reducer/tablet_api';
import { getLaptopsApi, laptopsSelector } from '../../Store/Reducer/laptop_api';
import {
    handleSearchLaptopSimilar,
    handleSearchMobileSimilar,
    handleSearchTabletSimilar,
    searchSimilarSelector,
} from '../../Store/Reducer/searchSimilar';

const CartPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 97%;

    .ant-row {
        max-width: 100%;
        margin: 10px 0;
        align-items: center;
        margin: 10px 0 !important;
    }
    .ant-alert-message {
        color: #9e8506;
    }
    .ant-alert-description {
        font-size: 13px;
        color: #9b9b9b;
    }
    .header-row {
        height: 50px;
        justify-content: center;
        display: flex;
        align-items: center;
        background: #ffffff;
        margin: 10px 0;
    }
    .ant-checkbox + span {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            margin: 0 10px;
        }
        i {
            color: red;
        }
    }
    .cart-header {
        height: 50px;
        display: flex;
        align-items: center;
    }
    p.cart-title {
        margin: 0 10px;
        width: 90%;
        padding: 10px;
    }
    .cart-product {
        width: 50%;
    }
    .cart-footer {
        display: flex;
        justify-content: center;
        align-items: baseline;
    }
    .ant-col.ant-col-3.gutter-row {
        text-align: center;
    }
    .ant-skeleton.ant-skeleton-element.ant-skeleton-active {
        width: 100%;
        height: 60px;
    }
    .cart-seklentor {
        width: 100%;
        height: 200px !important;
        margin-bottom: 20px;
    }
    .ant-dropdown.ant-dropdown-placement-bottomLeft {
        width: 100%;
        padding: 20px 176px;
        position: absolute;
        transform: translateX(-13px);
    }
    .btn-show-search-product-similar {
        &:after {
            content: '';
            width: 74%;
            height: 10px;
            background: #fefefe;
            position: absolute;
            top: 75px;
            z-index: 2;
            right: 19px;
        }
    }
    .input-product-checkbox {
        .ant-checkbox {
            transform: scale(1.5);
            .ant-checkbox-inner {
                top: -30px;
            }
        }
    }
`;

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    transition: display 0.5s ease;
`;
function Cart(props) {
    const dispatch = useDispatch();
    const cartProducts = useSelector(cartProductsSelector);
    const totalProducts = useSelector(totalProductsSelector);
    const searchSimilarProducts = useSelector(searchSimilarSelector);

    const mobile_api = useSelector(mobilesSelector);
    const tablet_api = useSelector(tabletsSelector);
    const laptop_api = useSelector(laptopsSelector);

    const [modal, setModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartProduct, setCartProduct] = useState([]);
    const [activeSearchSimilar, setActiveSearchSimilar] = useState(null);
    const [statusSearchSimilar, setStatusSearchSimilar] = useState(false);
    // console.info(totalProducts);
    console.info(cartProduct);

    console.info(searchSimilarProducts);

    useEffect(() => {
        setLoading(true);
        document.body.style.overflow = 'hidden';
        setCartProduct(cartProducts);
        setTimeout(() => {
            if (cartProduct.length) {
                setLoading(false);
                document.body.style.overflow = '';
            }
        }, 500);
        !cartProduct.length && setLoading(false);
    }, [cartProduct.length, cartProducts]);

    useEffect(() => {
        dispatch(getCartProduct());
        return () => {
            dispatch(resetProductCoints([]));
        };
    }, [dispatch]);

    useEffect(() => {
        dispatch(getMobilesApi());
        dispatch(getLaptopsApi());
        dispatch(getTabletsApi());
    }, [dispatch]);

    const handleAmount = (obj) => {
        if (obj.amount === 0) {
            setModal(true);
            setCurrentProduct([obj]);
        } else {
            dispatch(updateCartProduct(obj));
            dispatch(handleUpdateCoinsProduct(obj));
        }
    };

    const setModalVisibleAlear = () => {
        currentProduct.forEach(async (element) => {
            await dispatch(deleteCartProductAllApi(element));
            await dispatch(handleRemoveCoinsProduct(element));
        });
        setModal(false);
    };

    const setModalVisibleCancel = () => {
        setModal(false);
    };

    const onChangeAllProduct = (e) => {
        handleStatusChange('allSelect', e.target.checked);
    };

    const deleteProductToCart = () => {
        if (totalProducts.length) {
            setModal(true);
            setCurrentProduct(totalProducts);
        } else {
            messageToCart(true);
        }
    };

    const messageToCart = (status) => {
        if (status) {
            message.warning({
                content: 'Vui Lòng Chọn Sản Phẩm!',
                className: 'custom-class',
                style: {
                    marginTop: '0vh',
                },
            });
        }
    };

    const handleBuyProductCheck = () => {
        !totalProducts.length && messageToCart(true);
    };

    const handleBuyProductToPay = () => {
        const linkText = totalProducts.reduce((accumulator, item) => {
            return accumulator + `${item.id}=`;
        }, '');

        if (!totalProducts.length) {
            return '#';
        } else {
            return `/checkout/${linkText}`;
        }
    };

    const handleStatusChange = (id, status) => {
        if (id === 'allSelect') {
            let tempSelectAll = cartProduct.map((item) => {
                return { ...item, isChecked: status };
            });
            setCartProduct(tempSelectAll);
        } else {
            let tempProducts = cartProduct.map((item) =>
                item.id === id ? { ...item, isChecked: status } : item,
            );
            setCartProduct(tempProducts);
        }
    };

    const handleImportProductToTotal = (obj, status) => {
        if (status) {
            dispatch(handleAddCoinsProduct(obj));
        } else {
            dispatch(handleRemoveCoinsProduct(obj));
        }
    };

    const handleTextInfoDelete = () => {
        const text1 = (
            <span>
                Xoá {totalProducts.length} Sản Phẩm{' '}
                <i className="fad fa-trash-alt"></i>
            </span>
        );

        const text2 = (
            <span>
                Bạn Chưa Có Sản Phẩm Nào <i className="fad fa-sad-tear"></i>
            </span>
        );

        return totalProducts.length ? text1 : text2;
    };

    const handleTextInfoAllSelect = () => {
        const text1 = (
            <span>
                Nhấn vào để chọn tất cả <i className="fad fa-hand-pointer"></i>
            </span>
        );

        const text2 = (
            <span>
                Nhấn vào để bỏ chọn tất cả{' '}
                <i className="fad fa-hand-pointer"></i>
            </span>
        );

        return totalProducts.length === cartProduct.length ? text2 : text1;
    };

    const handleShowSearchProductActive = (index, product) => {
        const dataSearchToObj = {
            category: product.category,
            trademark: product.trademark,
            name: product.name,
        };

        switch (dataSearchToObj.category) {
            case 'tablet':
                tablet_api.length &&
                    dispatch(
                        handleSearchTabletSimilar({
                            tablet_api,
                            dataSearchToObj,
                        }),
                    );
                break;
            case 'mobile':
                mobile_api.length &&
                    dispatch(
                        handleSearchMobileSimilar({
                            mobile_api,
                            dataSearchToObj,
                        }),
                    );
                break;
            case 'laptop':
                laptop_api.length &&
                    dispatch(
                        handleSearchLaptopSimilar({
                            laptop_api,
                            dataSearchToObj,
                        }),
                    );
                break;
            default:
                break;
        }
        setActiveSearchSimilar(index);
        setStatusSearchSimilar(!statusSearchSimilar);
    };

    return (
        <Helmet title="Cart">
            {loading && (
                <div className="loading__container">
                    <ScaleLoader
                        color={'#2963B3'}
                        loading={loading}
                        css={override}
                        size={200}
                    />
                </div>
            )}
            <CartPage>
                <CartEmpty cartProduct={cartProduct} loading={loading} />

                <CartItemProducts
                    cartProduct={cartProduct}
                    handleAmount={handleAmount}
                    totalProducts={totalProducts}
                    loading={loading}
                    handleStatusChange={handleStatusChange}
                    handleImportProductToTotal={handleImportProductToTotal}
                    activeSearchSimilar={activeSearchSimilar}
                    handleShowSearchProductActive={
                        handleShowSearchProductActive
                    }
                    statusSearchSimilar={statusSearchSimilar}
                    mobile_api={mobile_api}
                    searchSimilarProducts={searchSimilarProducts}
                />

                <CartSummary
                    cartProduct={cartProduct}
                    totalProducts={totalProducts}
                    onChangeAllProduct={onChangeAllProduct}
                    deleteProductToCart={deleteProductToCart}
                    loading={loading}
                    handleBuyProductCheck={handleBuyProductCheck}
                    handleBuyProductToPay={handleBuyProductToPay}
                    handleTextInfoAllSelect={handleTextInfoAllSelect}
                    handleTextInfoDelete={handleTextInfoDelete}
                />

                <Popup
                    modal={modal}
                    setModalVisibleAlear={setModalVisibleAlear}
                    currentproduct={currentProduct}
                    setModalVisibleCancel={setModalVisibleCancel}
                />

                <SriceShock title="CÓ THỂ BẠN CŨNG THÍCH" slideStatus={false} />
            </CartPage>
        </Helmet>
    );
}

Cart.propTypes = {};

export default Cart;
