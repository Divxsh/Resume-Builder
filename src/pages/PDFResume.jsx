import React from "react";
import {
	Document,
	Page,
	View,
	Text,
	StyleSheet,
	Image,
} from "@react-pdf/renderer";

const PDFResume = ({
	profile,
	about,
	educationList,
	experienceList,
	skills,
}) => {
	const styles = StyleSheet.create({
		page: {
			padding: "36px",
			fontSize: "14px",
		},
		personalProfile: {
			marginBottom: "20px",
			borderLeft: "4px solid #212529",
			paddingLeft: "16px",
		},

		headings: {
			padding: "4px 4px 4px 8px",
			backgroundColor: "#f8f9fa",
			fontSize: "16px",
			color: "#212529",
		},
		heading2: {
			fontSize: "14px",
			fontWeight: "500px",
			color: "#212529",
		},
		textProp: {
			fontSize: "12px",
			fontWeight: "400px",
			color: "#212529",
		},
		textMuted: {
			color: "#6c757d",
			fontSize: "12px",
			fontWeight: 400,
		},
		contentsBox: {
			padding: "8px",
			color: "#212529",
			fontWeight: 400,
		},
		skillsContentBox: {
			display: "flex",
			flexDirection: "row",
			gap: "8px",
			flexWrap: "wrap",
		},
		pill: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "auto",
			fontSize: "12px",
			padding: "2px 8px",
			backgroundColor: "#f8f9fa",
			border: "1px solid #dee2e6",
			borderRadius: "4px",
			fontWeight: "400px",
			color: "#212529",
		},
	});
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<View style={styles.personalProfile}>
						<Text style={{ ...styles.textProp, fontSize: "24px" }}>
							{profile.name}
						</Text>
						<Text style={styles.textProp}>
							{profile.city}
							{profile.state ? `, ${profile.state}` : null}
						</Text>
						<Text style={styles.textProp}>{profile.gmail}</Text>
						<Text style={styles.textProp}>{profile.mobileNumber}</Text>
					</View>
					<View style={{ marginTop: "-8" }}>
						<Image
							src={profile.imageUrl}
							style={{
								width: "75px",
								height: "75px",
								borderRadius: "50%",
							}}
						/>
					</View>
				</View>
				<View>
					<Text style={styles.headings}>About</Text>
					<View style={styles.contentsBox}>
						{about.AboutMe ? (
							<Text style={styles.textProp}>{about.AboutMe}</Text>
						) : null}{" "}
					</View>
				</View>
				<View>
					<Text style={styles.headings}>Experience</Text>
					<View style={styles.contentsBox}>
						{experienceList.length
							? experienceList.map((experience) => (
									<View>
										<Text style={styles.heading2}>
											{experience.designation}
										</Text>
										<Text
											style={{
												...styles.textProp,
												textTransform: "capitalize",
											}}
										>
											{experience.companyName}
											{experience.jobType ? ` • ${experience.jobType}` : null}
										</Text>
										<Text style={styles.textMuted}>
											{`${experience.startMonth} ${experience.startYear} - ${
												experience.isWorking
													? "Present"
													: `${experience.endMonth} ${experience.endYear} }`
											}`}
											{experience.location ? ` • ${experience.location}` : null}
										</Text>
										<Text style={{ ...styles.textProp, marginTop: "4px" }}>
											{experience.description}
										</Text>
									</View>
							  ))
							: null}
					</View>
				</View>
				<View>
					<Text style={styles.headings}>Education</Text>

					{educationList.length ? (
						<View
							style={{ ...styles.contentsBox, display: "flex", rowGap: "5px" }}
						>
							{educationList.map((edu, idx) => (
								<View>
									<Text style={styles.heading2}>{edu.institute}</Text>
									<Text style={styles.textProp}>
										{edu.degree} • {edu.fieldOfStudy}
									</Text>
									<Text style={styles.textMuted}>
										{`${edu.startYear} - ${
											edu.isPursuing ? "Present" : edu.endYear
										}`}{" "}
										• {edu.score}
									</Text>
								</View>
							))}
						</View>
					) : null}

					{/* <View style={styles.heading2}>
						<Text>New St. Joseph co-ed Hr. Sec. School, Bhopal</Text>
						<Text style={styles.textProp}>Higher Secondary School • PCM</Text>
						<Text style={styles.textMuted}>2017 - 2018 • 80.20%</Text>
					</View>
					<View style={styles.heading2}>
						<Text>New St. Joseph co-ed Hr. Sec. School, Bhopal</Text>
						<Text style={styles.textProp}>High School • All Subjects</Text>
						<Text style={styles.textMuted}>2017 - 2018 • 71.67%</Text>
					</View> */}
				</View>
				<View>
					<Text style={styles.headings}>Skills</Text>
					<View style={{ ...styles.contentsBox, ...styles.skillsContentBox }}>
						{skills.length
							? skills.map((skill) => <Text style={styles.pill}>{skill}</Text>)
							: null}
					</View>
				</View>
			</Page>
		</Document>
	);
};

export default PDFResume;
