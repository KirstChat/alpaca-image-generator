import * as constants from '../helpers/constants';
import * as functions from '../helpers/functions';

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
			const randomAccessory = functions.randomNumber(constants.accessories);
			const randomBackground = functions.randomNumber(constants.background);
			const randomLeg = functions.randomNumber(constants.leg);
			const randomNeck = functions.randomNumber(constants.neck);
			const randomMouth = functions.randomNumber(constants.mouth);
			const randomEars = functions.randomNumber(constants.ears);
			const randomHair = functions.randomNumber(constants.hair);
			const randomEyes = functions.randomNumber(constants.eyes);
			
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
