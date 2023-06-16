import React from "react";
import { useSelector } from "react-redux";
import { Col, Image, Row } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

const PreviewResume = () => {
	const profile = useSelector((state) => state.profileDetail);
	const about = useSelector((state) => state.about);
	const educationList = useSelector((state) => state.education);
	const experienceList = useSelector((state) => state.experience);
	const skills = useSelector((state) => state.skills);

	const printDocument = () => {
		const input = document.getElementById("elementToPrint");
		html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL("image/png");
			const pdf = new jsPDF("p", "pt", "a4", false);
			pdf.addImage(imgData, "PNG", 0, 0, 600, 0, undefined, false);
			// pdf.output('dataurlnewwindow');
			pdf.save("download.pdf");
		});
	};

	return (
		<>
			<div className='d-flex align-items-center flex-column mt-2'>
				<Row>
					<Col>
						<Link to='/'>
							<button className='nav-link align-middle bg-dark text-white p-2 rounded'>
								Back
							</button>
						</Link>
					</Col>
					<Col>
						<button
							className='nav-link align-middle bg-dark text-white p-2 rounded'
							onClick={printDocument}
						>
							{/* <PDFDownloadLink
						document={
							<PDFResume
								profile={profile}
								about={about}
								educationList={educationList}
								experienceList={experienceList}
								skills={skills}
							/>
						}
						fileName='resume.pdf'
					>
						{({ blob, url, loading, error }) =>
							loading ? "Loading document..." : "Download PDF"
						}
					</PDFDownloadLink> */}
							Download
						</button>
					</Col>
				</Row>
				<div className='d-flex justify-content-center p-2 w-100'>
					<div
						className='d-flex flex-column flex-wrap row pdf border p-5'
						id='elementToPrint'
						size='A4'
						style={{ lineHeight: "20px" }}
					>
						<div className='d-flex justify-content-sm-between mb-4'>
							<div className='pl-3 ' style={{ borderLeft: "4px solid" }}>
								<h2 className='mb-1'>{profile.name}</h2>
								<div>
									{profile.city}
									{profile.state ? `, ${profile.state}` : null}
								</div>
								<div>{profile.gmail}</div>
								<div>{profile.mobileNumber}</div>
							</div>
							<div style={{ width: "90px", height: "90px" }}>
								<Image
									src={profile.imageUrl}
									roundedCircle
									fluid
									style={{ width: "100%", height: "100%" }}
								/>
							</div>
						</div>
						<div className='mb-2'>
							<h5 className='mb-1 bg-light p-1 pl-2'>About</h5>
							{about.AboutMe ? (
								<div style={{ fontSize: "14px" }} className='p-2'>
									{about.AboutMe}
								</div>
							) : null}
						</div>
						<div className='mb-2'>
							<h5 className='mb-1 bg-light p-1 pl-2'>Experience</h5>
							{experienceList.length
								? experienceList.map((experience) => (
										<div
											className='p-2'
											style={{ fontSize: "14px" }}
											key={experience.companyName}
										>
											<h6 className='mb-0 muted'>{experience.designation}</h6>
											<div style={{ textTransform: "capitalize" }}>
												{experience.companyName}
												{experience.jobType ? ` • ${experience.jobType}` : null}
											</div>
											<div className='text-muted'>
												{`${experience.startMonth} ${experience.startYear} - ${
													experience.isWorking
														? "Present"
														: `${experience.endMonth} ${experience.endYear}`
												}`}
												{experience.location
													? ` • ${experience.location}`
													: null}
											</div>
											<div>{experience.description}</div>
										</div>
								  ))
								: null}
						</div>
						<div className='mb-2'>
							<h5 className='mb-1 bg-light p-1 pl-2'>Education</h5>
							{educationList.length ? (
								<div className='p-2' style={{ fontSize: "14px" }}>
									{educationList.map((edu, idx) => (
										<div className={idx > 0 ? "mt-1" : null} key={idx}>
											<h6 className='mb-0 muted'>{edu.institute}</h6>
											<div style={{ lineHeight: "24px" }}>
												{edu.degree} • {edu.fieldOfStudy}
											</div>
											<div
												className='text-muted'
												style={{ lineHeight: "20px" }}
											>
												{`${edu.startYear} - ${
													edu.isPursuing ? "Present" : edu.endYear
												}`}{" "}
												• {edu.score}
											</div>
										</div>
									))}
								</div>
							) : null}
						</div>
						<div className='mb-4'>
							<h5 className='mb-1 bg-light p-1 pl-2'>Skills</h5>
							<div className='d-flex flex-wrap p-2' style={{ gap: "8px" }}>
								{skills.length
									? skills.map((skill) => (
											<p
												className='bg-light rounded px-2 m-0 border border-gray'
												key={skill}
											>
												{skill}
											</p>
									  ))
									: null}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PreviewResume;
