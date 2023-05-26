import React from "react";
import "./Breadcrumb.css";

const Breadcrumb = ({ breadcrumb = "" }) => {
	const breadcrumbSplited = breadcrumb.split(">") || [];
	return (
		<div className='breadcrumb__container'>
			<div className='breadcrumb'>
				{breadcrumbSplited.map((e, i) => {
					if (i !== breadcrumbSplited.length - 1) {
						return <span>{e}&nbsp;&gt;&nbsp;</span>;
					} else return <span>{e}</span>;
				})}
			</div>
		</div>
	);
};

export default Breadcrumb;
