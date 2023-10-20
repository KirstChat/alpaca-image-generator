import * as constants from '../helpers/constants';

export const styleButtonsReducer = (state, action) => {
	switch (action.type) {
		case 'accessories':
			return {
				...state,
				buttonType: action.type,
				buttons: constants.accessories
			};
		case 'background':
			return {
				...state,
				buttonType: action.type,
				buttons: constants.background
			};
		case 'ears':
			return {
				...state,
				buttonType: action.type,
				buttons: constants.ears
			};
		case 'eyes':
			return {
				...state,
				buttonType: action.type,
				buttons: constants.eyes
			};
		case 'hair':
			return {
				...state,
				buttonType: action.type,
				buttons: constants.hair
			};
		case 'leg':
			return {
				...state,
				buttonType: action.type,
				buttons: constants.leg
			};
		case 'mouth':
			return {
				...state,
				buttonType: action.type,
				buttons: constants.mouth
			};
		case 'neck':
			return {
				...state,
				buttonType: action.type,
				buttons: constants.neck
			};
		default:
			throw Error(`Unknown action: ${action.type}`);
	}
};
