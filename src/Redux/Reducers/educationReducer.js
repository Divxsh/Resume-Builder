function educationReducer(state = [], { type, payload }) {
	switch (type) {
		case "ADD_EDUCATION":
			return [...state, payload];

		case "UPDATE_EDUCATION":
			let updatedData = [...state];
			updatedData[payload.id] = payload.data;
			return updatedData;

		case "DELETE_EDUCATION":
			const remainingData = state.filter((item, idx) => {
				return idx !== payload;
			});
			return remainingData;

		default:
			return state;
	}
}

export default educationReducer;
