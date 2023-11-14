import { Fragment, useEffect, useReducer } from 'react';
import { alpacaImageReducer } from './reducers/alpacaImageReducer';
import * as constants from './helpers/constants';
import AlpacaImage from './components/AlpacaImage';
import Select from './components/Select';
import mergeImages from 'merge-images';
import './scss/main.scss';

const App = () => {
    const [alpacaImage, alpacaImageDispatch] = useReducer(
        alpacaImageReducer,
        constants.initialAlpacaImageState
    );

    useEffect(() => {
        const selectButton = document.querySelector('.js-select-button');
        selectButton.style.backgroundColor = `${
            constants.colours[alpacaImage.background]
        }`;
    }, [alpacaImage.background]);

    // Style Handler
    const styleHandler = (e) => {
        const category = e.target.getAttribute('data-category');
        const selectItem = e.target.getAttribute('data-select-item');

        alpacaImageDispatch({ type: `${category}`, selectItem });
    };

    // Download Button Handler
    const downloadHandler = () => {
        let imagePaths = [];

        constants.imageOrder.forEach((image) => {
            const imagePath = document.querySelector(`.js-image-${image}`);

            imagePath && imagePaths.push(imagePath.src);
        });

        mergeImages([...imagePaths]).then((b64) => {
            const download = document.createElement('a');

            download.href = b64;
            download.download = 'alpaca.png';
            download.click();
        });
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
                    randomImage={alpacaImage}
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
