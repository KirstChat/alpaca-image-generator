import { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as Ariakit from '@ariakit/react';

const SelectItems = ({ category, clickHandler, index, selectItems }) => {
    return (
        <Fragment>
            {selectItems[index].map((item, index) => (
                <Ariakit.SelectItem
                    className={`alpaca-generator__select-item alpaca-generator__select-item--${item} ${
                        category === 'background'
                            ? `alpaca-generator__select-item--background ${item}`
                            : ''
                    }`}
                    key={index}
                    value={item}
                    onClick={clickHandler}
                    data-category={category}
                    data-select-item={item}
                />
            ))}
        </Fragment>
    );
};

SelectItems.propTypes = {
    category: PropTypes.string,
    clickHandler: PropTypes.func,
    index: PropTypes.number,
    selectItems: PropTypes.array,
};

export default SelectItems;
