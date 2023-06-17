import { createStore, combineReducers } from "redux";
import educationReducer from "../Reducers/educationReducer";
import experienceReducer from "../Reducers/experienceReducer";
import skillReducer from "../Reducers/skillReducer";
import profileReducer from "../Reducers/profileReducer";
import aboutReducer from "../Reducers/aboutReducer";

const rootReducer = combineReducers({
	profileDetail: profileReducer,
	about: aboutReducer,
	education: educationReducer,
	experience: experienceReducer,
	skills: skillReducer,
});

const store = createStore(rootReducer);

export default store;
