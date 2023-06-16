import React from "react";
import { Field } from "react-final-form";

const MonthSelect = (props) => {
	const Months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"December",
	];
	return (
		<>
			<Field component='select' className='custom-select' {...props}>
				<option>Month</option>
				{Months.map((month) => (
					<option value={month} key={month}>
						{month}
					</option>
				))}
			</Field>
		</>
	);
};
export default MonthSelect;
