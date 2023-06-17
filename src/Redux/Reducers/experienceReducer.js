function experienceReducer(state = [], { type, payload }) {
	switch (type) {
		case "ADD_EXPERIENCE":
			return [...state, payload];

		case "UPDATE_EXPERIENCE":
			let updatedData = [...state];
			updatedData[payload.id] = payload.data;
			return updatedData;

		case "DELETE_EXPERIENCE":
			const remainingData = state.filter((item, idx) => {
				return idx !== payload.id;
			});
			return remainingData;

		default:
			return state;
	}
}

export default experienceReducer;
