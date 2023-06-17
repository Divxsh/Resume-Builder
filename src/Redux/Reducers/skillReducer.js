function skillReducer(state = [], { type, payload }) {
	switch (type) {
		case "ADD_SKILL":
			return [...payload];
		case "DELETE_SKILL":
			return state.filter((skill) => skill !== payload);
		default:
			return state;
	}
}

export default skillReducer;
