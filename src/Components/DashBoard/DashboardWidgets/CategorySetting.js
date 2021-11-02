import React from 'react';
import PropTypes from 'prop-types';

function CategorySetting(props) {
    return (
        <>
            <div
                className="col-xs-2 col-md-2 date"
                style={{ height: 70, padding: 10 }}
            >
                <label class="popup__upload" for="firstimg">
                    <div class="popup__photos">
                        <i class="fad fa-file-image" id="file-image"></i>
                    </div>
                    <input type="file" name="" id="firstimg" class="upload" />
                    <img id="displayImg" alt="" />
                </label>
            </div>
            <div className="col-xs-10 col-md-10">
                <input
                    type="text"
                    className="input-title"
                    placeholder="nhập danh mục sản phẩm"
                />
            </div>
        </>
    );
}

CategorySetting.propTypes = {};

export default CategorySetting;
