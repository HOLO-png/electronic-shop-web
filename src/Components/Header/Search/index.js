import React, { useRef } from 'react';

export default function Search() {
    const searchRef = useRef(null);
    const inputRef = useRef(null);

    const setActiveClass = () => {
        searchRef.current.classList.add('active');
        inputRef.current.value = '';
    };
    const removeActiveClass = () => {
        searchRef.current.classList.remove('active');
        inputRef.current.value = '';
    };
    return (
        <div className="header__menu__item header__menu__right__item">
            <div className="header__menu__item__search-wrap" ref={searchRef}>
                <div
                    className="header__menu__item__btn-search"
                    onClick={setActiveClass}
                >
                    <i className="fal fa-search"></i>
                </div>
                <div className="header__menu__item__input-search">
                    <input
                        type="text"
                        placeholder="Search ..."
                        ref={inputRef}
                    />
                </div>
                <div
                    className="header__menu__item__btn-search-off"
                    onClick={removeActiveClass}
                >
                    <i className="fal fa-times"></i>
                </div>
            </div>
        </div>
    );
}
