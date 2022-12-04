import React from "react";
import { Link } from "react-router-dom";

const CourseDetailsPage = ({ course }) => {
	const { id, name, image } = course;
	return (
		<div>
			<h2>{name}</h2>
			<img src={image} alt="" />
			<button>
				<Link to={`/course/${id}`}>Read More</Link>
			</button>
		</div>
	);
};

export default CourseDetailsPage;
