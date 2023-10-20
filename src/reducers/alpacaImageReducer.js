import * as constants from '../helpers/constants';

export const alpacaImageReducer = (state, action) => {
	switch (action.type) {
		case 'accessories':
			return {
				...state,
				accessories: action.button === 'none' ? '' : action.button
			};
		case 'background':
			return {
				...state,
				background: action.button
			};
		case 'ears':
			return {
				...state,
				ears: action.button
			};
		case 'eyes':
			return {
				...state,
				eyes: action.button
			};
		case 'hair':
			return {
				...state,
				hair: action.button
			};
		case 'leg':
			return {
				...state,
				leg: action.button
			};
		case 'mouth':
			return {
				...state,
				mouth: action.button
			};
		case 'neck':
			return {
				...state,
				neck: action.button
			};
		case 'reset':
			return {
				...state,
				accessories: '',
				background: constants.defaultBackground,
				leg: constants.defaultImage,
				neck: constants.defaultImage,
				mouth: constants.defaultImage,
				ears: constants.defaultImage,
				hair: constants.defaultImage,
				eyes: constants.defaultImage
			}
		case 'random':
			// TODO: Move this to a single function
			const randomAccessory = Math.floor(Math.random() * constants.accessories.length);
			const randomBackground = Math.floor(Math.random() * constants.background.length);
			const randomLeg = Math.floor(Math.random() * constants.leg.length);
			const randomNeck = Math.floor(Math.random() * constants.neck.length);
			const randomMouth = Math.floor(Math.random() * constants.mouth.length);
			const randomEars = Math.floor(Math.random() * constants.ears.length);
			const randomHair = Math.floor(Math.random() * constants.hair.length);
			const randomEyes = Math.floor(Math.random() * constants.eyes.length);
			
			return {
				...state,
				accessories: constants.accessories[randomAccessory] === 'none' ? '' : constants.accessories[randomAccessory],
				background: constants.background[randomBackground],
				leg: constants.leg[randomLeg],
				neck: constants.neck[randomNeck],
				mouth: constants.mouth[randomMouth],
				ears: constants.ears[randomEars],
				hair: constants.hair[randomHair],
				eyes: constants.eyes[randomEyes]
			}
		default:
			throw Error(`Unknown action: ${action.type}`);
	}
};
