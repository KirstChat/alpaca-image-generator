import { Fragment, useReducer } from 'react';
import { styleButtonsReducer } from './reducers/styleButtonsReducer';
import { alpacaImageReducer } from './reducers/alpacaImageReducer';
import * as constants from './helpers/constants';
import AlpacaImage from './components/AlpacaImage';
import Buttons from './components/Buttons';
import ButtonPanel from './components/ButtonPanel';
import './scss/main.scss';

const App = () => {
	// TODO: Move this into constants
	// Style Buttons
	const initialStyleButtonsState = {
		buttonType: 'accessories',
		buttons: ['earings', 'flower', 'glasses', 'headphones', 'none']
	};
	const [styleButtons, styleButtonsDispatch] = useReducer(styleButtonsReducer, initialStyleButtonsState);

	// TODO: Move this into constants
	// Alpaca Image
	const initialAlpacaImageState = {
		accessories: '',
		background: constants.defaultBackground,
		leg: constants.defaultImage,
		neck: constants.defaultImage,
		mouth: constants.defaultImage,
		ears: constants.defaultImage,
		hair: constants.defaultImage,
		eyes: constants.defaultImage
	};
	const [alpacaImage, alpacaImageDispatch] = useReducer(alpacaImageReducer, initialAlpacaImageState);

	// Accessorise Button Handler
	const accessoriseHandler = e => {
		const buttonType = e.target.getAttribute(['data-button']);

		styleButtonsDispatch({ type: `${buttonType}` });
	};

	// Style Button Handler
	const styleHandler = e => {
		const buttonType = e.target.getAttribute('data-button-type');
		const button = e.target.getAttribute('data-button');

		alpacaImageDispatch({ type: `${buttonType}`, button });
	};

	// Download Button Handler
	const downloadHandler = e => {
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

				<Buttons
					buttons={constants.accessoriseButtons}
					type='accessorise'
					onClick={accessoriseHandler}
				/>

				<ButtonPanel
					buttons={styleButtons.buttons}
					buttonType={styleButtons.buttonType}
					type='style'
					onClick={styleHandler}
				/>
			</section>

			<section className='alpaca-generator__additional-buttons'>
				<button className='alpaca-generator__button' onClick={downloadHandler}>⬇️ Download</button>
				<button className='alpaca-generator__button' onClick={randomiseHandler}>🔀 Randomise</button>
				<button className='alpaca-generator__button' onClick={resetHandler}>⏮️ Reset</button>
			</section>
		</Fragment>
	);
};

export default App;
