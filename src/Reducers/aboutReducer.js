function aboutReducer(state = {}, { type, payload }) {
	switch (type) {
		case "MANAGE_ABOUT":
			return { ...payload };
		default:
			return state;
	}
}

export default aboutReducer;
