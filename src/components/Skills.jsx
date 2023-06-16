import React, { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { connect, useSelector } from "react-redux";
import { addSkill, deleteSkill } from "../Actions/resume.actions";

const Skills = ({ Add, Delete }) => {
	const [tempSkills, setTempSkills] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [value, setValue] = useState("");
	const skillsList = useSelector((state) => state.skills);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);
	const onChangeHandler = (e) => setValue(e.target.value);

	const onKeyDownHandler = (e) => {
		if (e.keyCode === 13) {
			setTempSkills((prev) => [...prev, value]);
			setValue("");
		}
	};
	const submitHandler = (e) => {
		e.preventDefault();
		handleClose();
		Add(tempSkills);
	};
	const onDeleteTag = (skill) => () => {
		setTempSkills(tempSkills.filter((item) => item !== skill));
	};
	return (
		<Row className='justify-content-center'>
			<Col
				xs={11}
				md={10}
				className='d-flex p-3 bg-light rounded justify-content-between align-items-center'
			>
				<h5 className='m-0'>Skills</h5>
				<BsPlusSquare
					size={24}
					className='rounded cursor-pointer'
					onClick={handleShow}
				/>
			</Col>
			<Col
				xs={11}
				md={10}
				className='d-flex p-0 px-3 mt-2'
				style={{ gap: "8px" }}
			>
				{skillsList.map((item) => (
					<p
						className='bg-light rounded py-1 px-2 m-0 border border-gray'
						key={item}
					>
						{item}
					</p>
				))}
			</Col>

			<Modal show={showModal} centered backdrop='static'>
				<Modal.Header>
					<Modal.Title>Skills</Modal.Title>
					<MdClose size={24} className='rounded edit' onClick={handleClose} />
				</Modal.Header>
				<Modal.Body>
					<Form.Group className='form-group'>
						<Form.Label>Add Skills</Form.Label>
						<input
							type='text'
							name='skill'
							className='form-control'
							placeholder='Add Skills'
							onKeyDown={onKeyDownHandler}
							onChange={onChangeHandler}
							value={value}
						/>
					</Form.Group>

					<Row>
						<Col
							xs={12}
							md={12}
							className='d-flex p-0 px-3 mt-2 flex-wrap mb-2 w-100'
							style={{ gap: "8px" }}
						>
							{tempSkills.map((item) => (
								<p
									className='d-flex align-items-center bg-light rounded py-1 pl-2 m-0 border border-gray'
									key={item}
								>
									{item}
									<div className='h-100 border-left ml-1'>
										<MdClose
											size={18}
											className='rounded cursor-pointer m-1 '
											onClick={onDeleteTag(item)}
										/>
									</div>
								</p>
							))}
						</Col>
					</Row>
					<div className='w-100 d-flex'>
						<button
							type='submit'
							className='btn btn-primary ml-auto rounded'
							onClick={submitHandler}
						>
							Save
						</button>
					</div>
				</Modal.Body>
			</Modal>
		</Row>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		Add: (skill) => dispatch(addSkill(skill)),
		Delete: (skill) => dispatch(deleteSkill(skill)),
	};
};

export default connect(null, mapDispatchToProps)(Skills);
