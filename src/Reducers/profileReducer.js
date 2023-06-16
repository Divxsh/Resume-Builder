function profileReducer(state = {}, { type, payload }) {
	switch (type) {
		case "MANAGE_PROFILE":
			return { ...state, ...payload };
		default:
			return state;
	}
}

export default profileReducer;
