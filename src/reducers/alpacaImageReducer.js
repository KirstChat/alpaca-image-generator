import * as constants from '../helpers/constants';
import * as functions from '../helpers/functions';

export const alpacaImageReducer = (state, action) => {
	switch (action.type) {
		case 'accessories':
			return {
				...state,
				accessories: action.selectItem
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
			};
		case 'random':
			
			return {
				...state,
				accessories: constants.accessories[functions.randomNumber(constants.accessories)],
				background: constants.background[functions.randomNumber(constants.background)],
				ears: constants.ears[functions.randomNumber(constants.ears)],
				eyes: constants.eyes[functions.randomNumber(constants.eyes)],
				hair: constants.hair[functions.randomNumber(constants.hair)],
				leg: constants.leg[functions.randomNumber(constants.leg)],
				mouth: constants.mouth[functions.randomNumber(constants.mouth)],
				neck: constants.neck[functions.randomNumber(constants.neck)]
			}
		
		default:
			throw Error(`Unknown action: ${action.type}`);
	}
};
