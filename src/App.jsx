import { Fragment, useReducer } from 'react';
import { alpacaImageReducer } from './reducers/alpacaImageReducer';
import * as constants from './helpers/constants';
import AlpacaImage from './components/AlpacaImage';
import Select from './components/Select';
import './scss/main.scss';

const App = () => {
    const [alpacaImage, alpacaImageDispatch] = useReducer(
        alpacaImageReducer,
        constants.initialAlpacaImageState
    );

    // Style Button Handler
    const styleHandler = (e) => {
        const category = e.target.getAttribute('data-category');
        const selectItem = e.target.getAttribute('data-select-item');

        alpacaImageDispatch({ type: `${category}`, selectItem });
    };

    // Download Button Handler
    const downloadHandler = () => {
        console.log('Downloading...');
    };

    // Randomise Button Handler
    const randomiseHandler = () => {
        alpacaImageDispatch({ type: 'random' });
    };

    // Reset Button Handler
    const resetHandler = () => {
        alpacaImageDispatch({ type: 'reset' });
    };

    return (
        <Fragment>
            <section className='alpaca-generator__container'>
                <AlpacaImage alpacaImage={alpacaImage} />

                <Select
                    categories={constants.accessoriseButtons}
                    clickHandler={styleHandler}
                />
            </section>

            <section className='alpaca-generator__additional-buttons'>
                <button
                    className='alpaca-generator__button'
                    onClick={downloadHandler}
                >
                    ⬇️ Download
                </button>
                <button
                    className='alpaca-generator__button'
                    onClick={randomiseHandler}
                >
                    🔀 Randomise
                </button>
                <button
                    className='alpaca-generator__button'
                    onClick={resetHandler}
                >
                    ⏮️ Reset
                </button>
            </section>
        </Fragment>
    );
};

export default App;
