export const manageProfile = (data) => {
	// console.log("Action : manageProfile ", data);
	return {
		type: "MANAGE_PROFILE",
		payload: data,
	};
};

export const manageAbout = (data) => {
	// console.log("Action : manageAbout ", data);
	return {
		type: "MANAGE_ABOUT",
		payload: data,
	};
};

export const addExperience = (experience) => {
	return {
		type: "ADD_EXPERIENCE",
		payload: experience,
	};
};

export const updateExperience = (id, updatedData) => {
	return {
		type: "UPDATE_EXPERIENCE",
		payload: { id: id, data: updatedData },
	};
};

export const deleteExperience = (id) => {
	return {
		type: "DELETE_EXPERIENCE",
		payload: { id },
	};
};
export const addEducation = (education) => {
	return {
		type: "ADD_EDUCATION",
		payload: education,
	};
};

export const updateEducation = (id, updatedData) => {
	return {
		type: "UPDATE_EDUCATION",
		payload: { id: id, data: updatedData },
	};
};

export const deleteEducation = (id) => {
	return {
		type: "DELETE_EDUCATION",
		payload: id,
	};
};

export const addSkill = (skills) => {
	return {
		type: "ADD_SKILL",
		payload: skills,
	};
};

export const deleteSkill = (skill) => {
	return {
		type: "DELETE_SKILL",
		payload: skill,
	};
};
