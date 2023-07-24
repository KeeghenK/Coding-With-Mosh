import * as actions from "./actionTypes";

export const bugAdded = (description) => {
	return {
		type: actions.BUG_ADDED,
		payload: {
			description,
		},
	};
};

export const bugResolved = (id) => {
	return {
		type: actions.BUG_RESOLVED,
		payload: {
			id,
		},
	};
};
