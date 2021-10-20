import React from 'react';
import PropTypes from 'prop-types';
import ProductPayItem from './ProductPayItem';
import OrderPayProduct from './OrderPayProduct';

function OrderPayProducts(props) {
    const { orders, handleOrderActive, status, photoURL } = props;
    return (
        <div className="user-order__product-all">
            {orders.map((order) => (
                <OrderPayProduct
                    order={{
                        ...order,
                        status: {
                            title: 'Đang chờ xử lý',
                            icon: 'fa-badge-check',
                        },
                    }}
                    key={order.id}
                    handleOrderActive={handleOrderActive}
                    status={status}
                    photoURL={photoURL}
                />
            ))}
        </div>
    );
}

OrderPayProducts.propTypes = {};

export default OrderPayProducts;
