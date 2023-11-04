import * as Ariakit from '@ariakit/react';
import { Fragment } from 'react';

const SelectItems = ({ category, clickHandler, index, selectItems }) => {
    return (
        <Fragment>
            {selectItems[index].map((item, index) => (
                <Ariakit.SelectItem
                    className={`alpaca-generator__select-item alpaca-generator__select-item--${item} ${
                        category === 'background' &&
                        `alpaca-generator__select-item--background`
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

export default SelectItems;
