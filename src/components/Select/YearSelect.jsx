import React from "react";
import { Field } from "react-final-form";

const YearSelect = (props) => {
	const year = new Date().getFullYear();
	const years = [];
	for (let i = 1995; i < year + 10; i++) years.push(i);

	return (
		<>
			<Field component='select' className=' custom-select' {...props}>
				<option>Year</option>
				{years.map((year) => (
					<option value={year} key={year}>
						{year}
					</option>
				))}
			</Field>
		</>
	);
};
export default YearSelect;
