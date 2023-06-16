import React, { useState } from "react";
import { Card, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { MdClose, MdEdit, MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { Field, Form as FinalForm } from "react-final-form";
import { manageProfile } from "../Actions/resume.actions";
import { connect, useSelector } from "react-redux";

const PersonalDetail = ({ manageProfile }) => {
	const detail = {
		name: "",
		city: "",
		state: "",
		gmail: "",
		mobileNumber: "",
		profileImage: "",
		imageUrl: "",
	};
	const profileDetail = useSelector((state) => state.profileDetail);
	const [showModal, setShowModal] = useState(false);
	const [imageDetail, setImageDetail] = useState({
		profileImage: "",
		imageUrl: "",
	});
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	const handleSubmit = (data) => {
		handleClose();
		manageProfile({ ...detail, ...data, ...imageDetail });
	};

	const fileHandler = (e) => {
		// console.log("File Detail", e.target.files[0]);
		setImageDetail({
			profileImage: e.target.files[0].name,
			imageUrl: URL.createObjectURL(e.target.files[0]),
		});
	};

	return (
		<Row className='justify-content-center wrap' style={{ rowGap: "12px" }}>
			<Col
				className='d-flex p-0 justify-content-center justify-content-md-start'
				md={2}
			>
				<Card className='bg-light'>
					<Card.Body
						className='p-3'
						style={{ width: "164px", height: "164px" }}
					>
						<Image
							src={profileDetail.imageUrl || "logo.png"}
							roundedCircle
							fluid
							style={{ height: "100%", width: "100%" }}
						/>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={11} md={8} className='d-flex flex-column bg-light rounded p-3'>
				<h3>{profileDetail.name || "No Name"}</h3>
				<p
					className='my-1 d-flex align-items-center'
					style={{ columnGap: "4px" }}
				>
					<MdOutlineLocationOn size={24} />
					{profileDetail.city || "City, State"}&nbsp;
					{profileDetail.state ? `, ${profileDetail.state}` : null}
				</p>
				<p
					className='my-1 d-flex align-items-center'
					style={{ columnGap: "4px" }}
				>
					<CgMail size={24} />
					{profileDetail.gmail || "abc@gmail.com"}
				</p>
				<p
					className='my-1 d-flex align-items-center'
					style={{ columnGap: "4px" }}
				>
					<MdPhone size={24} />
					{profileDetail.mobileNumber || "+91234567890"}
				</p>
				<div
					className='position-absolute bg-white rounded shadow-sm'
					style={{ bottom: "16px", right: "16px" }}
				>
					<MdEdit
						size={24}
						className='rounded cursor-pointer'
						onClick={handleShow}
					/>
				</div>
				<Modal show={showModal} centered backdrop='static'>
					<Modal.Header>
						<Modal.Title>Skills</Modal.Title>
						<MdClose size={24} className='rounded edit' onClick={handleClose} />
					</Modal.Header>
					<Modal.Body>
						<FinalForm
							onSubmit={handleSubmit}
							// validate={validate}
							initialValues={profileDetail}
							render={({ handleSubmit }) => (
								<Form onSubmit={handleSubmit}>
									<Form.Group className='form-group'></Form.Group>
									<Form.Group className='form-group'>
										<Form.Label>Add Image</Form.Label>
										<input
											type='file'
											name='profileImage'
											onChange={fileHandler}
											className='form-control'
										/>
									</Form.Group>
									<Form.Group className='form-group'>
										<Form.Label>Full Name</Form.Label>
										<Field
											name='name'
											component='input'
											className='form-control'
											placeholder='Ex. Raj Sharma'
										/>
									</Form.Group>
									<Form.Group className='form-group'>
										<Form.Label>City</Form.Label>
										<Field
											name='city'
											component='input'
											className='form-control'
											placeholder='Ex. Indore'
										/>
									</Form.Group>
									<Form.Group className='form-group'>
										<Form.Label>state</Form.Label>
										<Field
											name='state'
											component='input'
											className='form-control'
											placeholder='Ex. Madhya Pradesh'
										/>
									</Form.Group>
									<Form.Group className='form-group'>
										<Form.Label>Gamil</Form.Label>
										<Field
											name='gmail'
											component='input'
											type='gmail'
											className='form-control'
											placeholder='Ex. xyz@gmail.com	'
										/>
									</Form.Group>

									<Form.Group className='form-group'>
										<Form.Label>Mobile Number</Form.Label>
										<Field
											name='mobileNumber'
											component='input'
											type='tel'
											max='10'
											className='form-control'
											placeholder='Ex. 9987654321'
										/>
									</Form.Group>

									<div className='w-100 d-flex'>
										<button
											type='submit'
											className='btn btn-primary ml-auto rounded'
										>
											Save
										</button>
									</div>
								</Form>
							)}
						/>
					</Modal.Body>
				</Modal>
			</Col>
		</Row>
	);
};

const mapDisptachToProps = (dispatch) => {
	return {
		manageProfile: (data) => dispatch(manageProfile(data)),
	};
};

export default connect(null, mapDisptachToProps)(PersonalDetail);
