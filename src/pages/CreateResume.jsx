import React from "react";
import { Container } from "react-bootstrap";
import PersonalDetail from "../components/PersonalDetail";
import Summary from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { Link } from "react-router-dom";

const CreateResume = () => {
	return (
		<Container className='mt-3 d-flex flex-column' style={{ rowGap: "12px" }}>
			<PersonalDetail />
			<Summary />
			<Experience />
			<Education />
			<Skills />
			<div className='d-flex justify-content-center text-white'>
				<Link to='/preview'>
					<button className='nav-link align-middle bg-dark text-white p-2 rounded'>
						Preview
					</button>
				</Link>
			</div>
		</Container>
	);
};

export default CreateResume;
