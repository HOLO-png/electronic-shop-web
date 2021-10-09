import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { evaluate_content } from '../../assets/fake-data';
import { Input } from 'antd';

const { TextArea } = Input;

function EvaluateWebs(props) {
    const [status, setStatus] = useState(false);
    const [active, setActive] = useState(null);
    const [activeEvaluate, setActiveEvaluate] = useState(null);
    const [statusForm, setStatusForm] = useState(false);

    const handleShowModalEvaluate = () => {
        setStatus(!status);
        setStatusForm(false);
        setActiveEvaluate(null);
    };

    const someHandler = (index) => {
        setActive(index);
    };

    const handleHiddenTable = () => {
        setStatus(false);
        setStatusForm(false);
        setActiveEvaluate(null);
    };

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            if (!e.target.closest('.evaluate__table__content-item')) {
                setActive(null);
            }
        });
        return () => {
            window.removeEventListener('mousemove', null);
        };
    }, []);

    const handleShowFormEvaluate = (index) => {
        setActive(index);
        setStatusForm(true);
        setActiveEvaluate(index);
    };

    console.log(activeEvaluate);
    console.log(active);

    return (
        <div className="evaluate">
            <div className="evaluate__icon" onClick={handleShowModalEvaluate}>
                <i class="fad fa-sticky-note"></i>
                {status ? (
                    <i class="fad fa-times"></i>
                ) : (
                    <i class="fad fa-heart"></i>
                )}
            </div>
            <div
                className={`evaluate__table ${status ? 'active' : ''} ${
                    statusForm ? 'form' : ''
                }`}
            >
                <div
                    className="evaluate__table__close"
                    onClick={handleHiddenTable}
                >
                    <i class="fal fa-times"></i>
                </div>
                <div className="evaluate__table__title">
                    <span>Cho em xin cái đánh giá với ạ! Love you </span>
                </div>
                <div className="evaluate__table__content">
                    {evaluate_content.map((item, index) => (
                        <div
                            className={`evaluate__table__content-item ${
                                status ? 'active' : ''
                            }`}
                            onClick={() => handleShowFormEvaluate(index)}
                        >
                            <span
                                className={`evaluate__table__content-item-des ${
                                    activeEvaluate === index
                                        ? 'active'
                                        : active === index
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                {item.name}
                            </span>
                            <i
                                class={`fad ${item.icon}`}
                                style={{
                                    color: statusForm
                                        ? activeEvaluate === index
                                            ? active === null
                                                ? '#ee0043'
                                                : '#ff90af'
                                            : '#ff90af'
                                        : active === null
                                        ? '#ee0043'
                                        : active === index
                                        ? '#ee0043'
                                        : '#ff90af',
                                }}
                                onMouseEnter={() => someHandler(index)}
                            ></i>
                            <span
                                className={`evaluate__table__content__score ${
                                    activeEvaluate === index
                                        ? 'active'
                                        : active === index
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                90%
                            </span>
                        </div>
                    ))}
                </div>
                {statusForm ? (
                    <div className="evaluate__table__fromInput">
                        <TextArea placeholder="Cho em xin cái đánh giá với ạ! Love you" />
                        <i class="fad fa-paper-plane"></i>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

EvaluateWebs.propTypes = {};

export default EvaluateWebs;
