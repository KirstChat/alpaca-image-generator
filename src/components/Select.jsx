import { useMemo } from 'react';
import PropTypes from 'prop-types';
import SelectItems from './SelectItems';
import * as Ariakit from '@ariakit/react';
import * as constants from '../helpers/constants';

const Select = ({ categories, clickHandler }) => {
    const selectItems = useMemo(() => {
        let items = [];

        categories.forEach((category) => {
            items.push(constants[category]);
        });
        return items;
    }, [categories]);

    return (
        <div className='alpaca-generator__select'>
            {categories.map((category, index) => (
                <Ariakit.SelectProvider
                    defaultValue={selectItems[index][0]}
                    key={index}
                >
                    <div className='alpaca-generator__select-container'>
                        <Ariakit.SelectLabel className='alpaca-generator__select-category'>
                            {category}
                        </Ariakit.SelectLabel>

                        <Ariakit.Select className='alpaca-generator__select-button' />

                        <Ariakit.SelectPopover
                            sameWidth
                            className={`alpaca-generator__select-popover alpaca-generator__select-popover--${category}`}
                        >
                            <SelectItems
                                category={category}
                                clickHandler={clickHandler}
                                index={index}
                                selectItems={selectItems}
                            />
                        </Ariakit.SelectPopover>
                    </div>
                </Ariakit.SelectProvider>
            ))}
        </div>
    );
};

Select.propTypes = {
    categories: PropTypes.array,
    clickHandler: PropTypes.func,
};

export default Select;
