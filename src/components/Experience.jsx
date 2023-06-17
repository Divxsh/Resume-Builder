import React, { useState } from "react";
import { Col, Modal, Row, Form } from "react-bootstrap";
import { BsPlusSquare, BsBuildingsFill } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";
import { Form as FinalForm, Field } from "react-final-form";
import { MdClose } from "react-icons/md";
import MonthSelect from "./Select/MonthSelect";
import YearSelect from "./Select/YearSelect";
import { connect, useSelector } from "react-redux";
import {
	addExperience,
	updateExperience,
	deleteExperience,
} from "../Redux/Actions/resume.actions";

const Experience = ({ Add, Delete, Update }) => {
	const initialEditState = { isEdit: false, id: -1 };
	const [showModal, setShowModal] = useState(false);
	const [edit, setEdit] = useState({ ...initialEditState });
	const experienceList = useSelector((state) => state.experience);

	const handleClose = () => {
		setShowModal(false);
		setEdit(initialEditState);
	};

	const handleShow = () => setShowModal(true);

	const handleSubmit = (data) => {
		const edited = edit;
		handleClose();
		if (edited.isEdit) Update(edited.id, data);
		else Add(data);
	};

	const editHandler = (id) => () => {
		setEdit({ isEdit: true, id: id });
		handleShow();
	};

	const deleteHandler = (id) => () => Delete(id);

	return (
		<Row className='justify-content-center'>
			<Col
				xs={11}
				md={10}
				className='d-flex p-3 bg-light rounded justify-content-between align-items-center'
			>
				<h5 className='m-0'>Experience</h5>
				<BsPlusSquare
					size={24}
					className='rounded cursor-pointer'
					onClick={handleShow}
				/>
			</Col>

			{experienceList.map((data, index) => (
				<Col className='p-0 px-3 mt-1' md={10} xs={12} key={data.companyName}>
					<Row className='pt-3'>
						<Col xs={10} md={11} className='d-flex justify-content-start'>
							<div>
								<BsBuildingsFill
									size={36}
									className='rounded color-blue bg-light shadow-sm p-1'
								/>
							</div>
							<div className='px-3'>
								<h5 className='m-0'>{data.designation}</h5>
								<p className='text-muted m-0'>
									{data.companyName} • {data.jobType}
								</p>
								<p className='text-muted m-0'>
									{`${data.startMonth} ${data.startYear} - ${
										data.isWorking
											? "Present"
											: `${data.endMonth} ${data.endYear}`
									} `}
									• {data.location}
								</p>
								<p>{data.description}</p>
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

			<Modal show={showModal} onHide={handleClose} backdrop='static' size='md'>
				<Modal.Header>
					<Modal.Title>Experience</Modal.Title>
					<MdClose
						size={24}
						className='rounded cursor-pointer'
						onClick={handleClose}
					/>
				</Modal.Header>
				<Modal.Body>
					<FinalForm
						onSubmit={handleSubmit}
						// validate={validate}
						initialValues={experienceList[edit.id]}
						render={({ handleSubmit, form, values }) => (
							<Form onSubmit={handleSubmit}>
								<Form.Group className='form-group'>
									<Form.Label>Designation</Form.Label>
									<Field
										name='designation'
										component='input'
										className='form-control'
										placeholder='Ex. Full Stack Developer'
									/>
								</Form.Group>
								<Form.Group className='form-group'>
									<Form.Label>Company Name</Form.Label>
									<Field
										name='companyName'
										component='input'
										className='form-control'
										placeholder='Ex. Amazon'
									/>
								</Form.Group>
								<Form.Group className='form-group'>
									<Form.Label>Job Type</Form.Label>
									<Field
										name='jobType'
										component='select'
										className='form-control'
										placeholder='Ex. Full-time'
									>
										<option>Job Type</option>
										<option value='full-time'>Full Time</option>
										<option value='part-time'>Part Time</option>
										<option value='internship'>Internship</option>
										<option value='Freelancer'>Freelancer</option>
									</Field>
								</Form.Group>
								<Form.Check className='d-flex align-items-center mb-2'>
									<Field
										id='currentWorking'
										name='isWorking'
										type='checkbox'
										component='input'
									/>
									<Form.Label htmlFor='currentWorking' className='m-0 ml-2'>
										Currently working
									</Form.Label>
								</Form.Check>
								<Form.Group className='form-group'>
									<Row className='m-0' style={{ columnGap: "20px" }}>
										<Col className='px-0'>
											<Form.Label>Start Date</Form.Label>
											<Row>
												<Col className='pr-0'>
													<MonthSelect name='startMonth' />
												</Col>
												<Col className='pr-0'>
													<YearSelect name='startYear' />
												</Col>
											</Row>
										</Col>
										<Col>
											<Form.Label>End Date</Form.Label>
											<Row>
												<Col className='pr-0'>
													<MonthSelect
														name='endMonth'
														disabled={values.isWorking}
													/>
												</Col>
												<Col className='pr-0'>
													<YearSelect
														name='endYear'
														disabled={values.isWorking}
													/>
												</Col>
											</Row>
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className='form-group'>
									<Form.Label>Location</Form.Label>
									<Field
										name='location'
										component='input'
										className='form-control'
										placeholder='Ex. Delhi'
									/>
								</Form.Group>
								<Form.Group className='form-group'>
									<Form.Label>Description</Form.Label>
									<Field
										name='description'
										component='textarea'
										className='form-control'
										placeholder='Ex. Worked as a Full stack developer'
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
		Add: (data) => dispatch(addExperience(data)),
		Update: (data, id) => dispatch(updateExperience(data, id)),
		Delete: (id) => dispatch(deleteExperience(id)),
	};
};

export default connect(null, mapDispatchToProps)(Experience);
