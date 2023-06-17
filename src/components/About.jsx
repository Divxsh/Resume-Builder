import React, { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { Field, Form as FinalForm } from "react-final-form";
import { BsPlusSquare } from "react-icons/bs";
import { MdClose, MdEdit } from "react-icons/md";
import { connect, useSelector } from "react-redux";
import { manageAbout } from "../Redux/Actions/resume.actions";

const About = ({ manage }) => {
	const [showModal, setShowModal] = useState(false);
	const about = useSelector((state) => state.about);

	const handleShow = () => setShowModal(true);

	const handleClose = () => setShowModal(false);

	const handleSubmit = (data) => {
		manage(data);
		handleClose();
	};

	return (
		<Row className='justify-content-center'>
			<Col
				xs={11}
				md={10}
				className='d-flex p-3 bg-light rounded justify-content-between align-items-center'
			>
				<h5 className='m-0'>About</h5>
				{about.AboutMe !== undefined ? (
					<MdEdit size={24} className='rounded edit' onClick={handleShow} />
				) : (
					<BsPlusSquare
						size={24}
						className='rounded edit'
						onClick={handleShow}
					/>
				)}
			</Col>
			{about.AboutMe !== undefined ? (
				<Col xs={11} md={10} className='mt-2 px-3'>
					<p className='m-0'>
						{/* The DOM represents an HTML or XML document as a hierarchical tree
					structure. Each element, attribute, and text node in the document is
					represented by a node object. The relationship between nodes forms a
					parent-child hierarchy, allowing traversal and manipulation of the
					document's structure. */}
						{about.AboutMe}
					</p>
				</Col>
			) : null}

			<Modal show={showModal} onHide={handleClose} backdrop='static' centered>
				<Modal.Header>
					<Modal.Title>About</Modal.Title>
					<MdClose size={24} className='rounded edit' onClick={handleClose} />
				</Modal.Header>
				<Modal.Body>
					<FinalForm
						onSubmit={handleSubmit}
						initialValues={about}
						render={({ handleSubmit }) => (
							<Form onSubmit={handleSubmit}>
								<Form.Group className='form-group'>
									<Form.Label>About Me</Form.Label>
									<Field
										name='AboutMe'
										component='textarea'
										className='form-control'
										placeholder=''
									/>
								</Form.Group>

								<div className='w-100 d-flex'>
									<button
										type='submit'
										className='btn btn-primary ml-auto rounded'
									>
										{about.AboutMe !== undefined ? "Save Changes" : "Save"}
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
		manage: (about) => dispatch(manageAbout(about)),
	};
};

export default connect(null, mapDispatchToProps)(About);
