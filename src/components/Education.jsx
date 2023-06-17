import React, { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { Field, Form as FinalForm } from "react-final-form";
import { BsPlusSquare } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { MdEdit, MdDelete, MdClose } from "react-icons/md";
import YearSelect from "./Select/YearSelect";
import { connect, useSelector } from "react-redux";
import {
	addEducation,
	updateEducation,
	deleteEducation,
} from "../Redux/Actions/resume.actions";

const Education = ({ Add, Update, Delete }) => {
	const initialEditState = { isEdit: false, id: -1 };
	const [showModal, setShowModal] = useState(false);
	// const [isPursuing, setIsPursuing] = useState(false);
	const [edit, setEdit] = useState({ ...initialEditState });
	const educationList = useSelector((state) => state.education);

	function handleClose() {
		setShowModal(false);
		// setIsPursuing(false);
		setEdit(initialEditState);
	}

	function handleShow() {
		setShowModal(true);
	}

	function handleSubmit(data) {
		const edited = edit;
		handleClose();
		if (edited.isEdit) Update(edited.id, data);
		else Add(data);
	}

	const editHandler = (id) => () => {
		setEdit({ isEdit: true, id: id });
		handleShow();
	};
	const deleteHandler = (id) => () => {
		Delete(id);
	};

	return (
		<Row className='justify-content-center'>
			<Col
				xs={11}
				md={10}
				className='d-flex p-3 bg-light rounded justify-content-between align-items-center'
			>
				<h5 className='m-0'>Education</h5>
				<BsPlusSquare
					size={24}
					className='rounded cursor-pointer'
					onClick={handleShow}
				/>
			</Col>

			{educationList.map((education, index) => (
				<Col xs={11} md={10} className='p-0 px-3 mt-1 ' key={index}>
					<Row className='pt-3'>
						<Col xs={10} md={11} className='d-flex justify-content-start'>
							<div>
								<GiGraduateCap
									size={36}
									className='rounded color-blue bg-light shadow-sm p-1'
								/>
							</div>
							<div className='px-3'>
								<h5 className='m-0'>{education.institute}</h5>
								<p className='m-0'>
									{education.degree} • {education.fieldOfStudy}
								</p>
								<p className='text-muted'>
									{`${education.startYear} - ${
										education.isPursuing ? "Present" : `${education.endYear}`
									}`}{" "}
									• {education.score}
								</p>
							</div>
						</Col>
						<Col
							xs={2}
							md={1}
							className='d-flex flex-column align-items-end'
							style={{ rowGap: "10px" }}
						>
							<MdEdit
								size={24}
								className='rounded cursor-pointer'
								onClick={editHandler(index)}
							/>
							<MdDelete
								size={24}
								className='rounded cursor-pointer'
								onClick={deleteHandler(index)}
							/>
						</Col>
					</Row>
				</Col>
			))}

			<Modal show={showModal} onHide={handleClose} backdrop='static' centered>
				<Modal.Header>
					<Modal.Title>Education</Modal.Title>
					<MdClose size={24} className='rounded edit' onClick={handleClose} />
				</Modal.Header>
				<Modal.Body>
					<FinalForm
						onSubmit={handleSubmit}
						// validate={validate}
						initialValues={educationList[edit.id]}
						render={({ handleSubmit, values }) => (
							<Form onSubmit={handleSubmit}>
								<Form.Group className='form-group'>
									<Form.Label>School/College/Univerty</Form.Label>
									<Field
										name='institute'
										component='input'
										className='form-control'
										placeholder='Ex. IIT-Kanpur'
									/>
								</Form.Group>
								<Form.Group className='form-group'>
									<Form.Label>Degree</Form.Label>
									<Field
										name='degree'
										component='input'
										className='form-control'
										placeholder='Ex. B.Tech'
									/>
								</Form.Group>
								<Form.Group className='form-group'>
									<Form.Label>Field of study</Form.Label>
									<Field
										name='fieldOfStudy'
										component='input'
										className='form-control'
										placeholder='Ex. Computer Science Engineering'
									/>
								</Form.Group>
								<Form.Check className='d-flex align-items-center mb-2'>
									<Field
										id='pursuing'
										name='isPursuing'
										component={"input"}
										type='checkbox'
									/>
									<Form.Label htmlFor='pursuing' className='m-0 ml-2'>
										Currently pursuing
									</Form.Label>
								</Form.Check>
								<Form.Group className='form-group'>
									<Row className='m-0' style={{ columnGap: "20px" }}>
										<Col className='px-0'>
											<Form.Label>Start Date</Form.Label>
											<Col className='p-0'>
												<YearSelect name='startYear' />
											</Col>
										</Col>
										<Col className='px-0'>
											<Form.Label>End Date</Form.Label>
											<Col className='p-0'>
												<YearSelect
													name='endYear'
													disabled={values?.isPursuing}
												/>
											</Col>
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className='form-group'>
									<Form.Label>Score</Form.Label>
									<Field
										name='score'
										component='input'
										className='form-control'
										placeholder='Ex. 90%/9CGPA'
									/>
								</Form.Group>

								<div className='w-100 d-flex'>
									<button
										type='submit'
										className='btn btn-primary ml-auto rounded'
									>
										{edit.isEdit ? "Save Changes" : "Save"}
									</button>
								</div>
							</Form>
						)}
					/>
				</Modal.Body>
			</Modal>
		</Row>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		Add: (data) => dispatch(addEducation(data)),
		Update: (id, data) => dispatch(updateEducation(id, data)),
		Delete: (id) => dispatch(deleteEducation(id)),
	};
};

export default connect(null, mapDispatchToProps)(Education);
