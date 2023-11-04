import * as constants from '../helpers/constants';

export const alpacaImageReducer = (state, action) => {
	switch (action.type) {
		case 'accessories':
			return {
				...state,
				accessories: action.selectItem === 'none' ? '' : action.selectItem
			};
		case 'background':
			return {
				...state,
				background: action.selectItem
			};
		case 'ears':
			return {
				...state,
				ears: action.selectItem
			};
		case 'eyes':
			return {
				...state,
				eyes: action.selectItem
			};
		case 'hair':
			return {
				...state,
				hair: action.selectItem
			};
		case 'leg':
			return {
				...state,
				leg: action.selectItem
			};
		case 'mouth':
			return {
				...state,
				mouth: action.selectItem
			};
		case 'neck':
			return {
				...state,
				neck: action.selectItem
			};
		case 'reset':
			return {
				...state,
				...constants.initialAlpacaImageState
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
