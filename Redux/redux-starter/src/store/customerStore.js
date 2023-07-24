import reducer from "./reducer";

function createStore(reducer) {
	let state;
	let listeners = [];

	function subscribe(listener) {
		listeners.push(listener);

		for (let i = 0; i < listeners.length; i++) listeners[i]();
	}

	function dispatch(action) {
		state = reducer(state, action);
	}

	function getState() {
		return state;
	}

	return {
		subscribe,
		dispatch,
		getState,
	};
}

export default createStore(reducer);
