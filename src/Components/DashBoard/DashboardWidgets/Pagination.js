/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
    const { productsPerPage, totalProducts, paginate } = props;

    console.log(productsPerPage, totalProducts);

    const pageNumbers = [];

    for (
        let i = 1;
        i < Math.ceil(totalProducts.length / productsPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }

    return (
        <nav
            aria-label="Page navigation example"
            style={{ display: 'flex', justifyContent: 'center' }}
        >
            <ul class="pagination justify-content-center">
                {pageNumbers.map((number, index) => (
                    <li class="page-item" key={index}>
                        <a
                            class="page-link"
                            href="#"
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {};

export default Pagination;
