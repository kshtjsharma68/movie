
import { basic } from '../actions/basicActions'

const INITIAL_STATE  = {};

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case 'START':
			return state;
		default:
			return state;
	}
};

export default reducer;