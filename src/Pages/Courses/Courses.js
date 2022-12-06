import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";

const Courses = () => {
	const courses = useLoaderData();
	console.log(courses);
	return (
		<div>
			{courses.map((course) => (
				<CourseDetails key={course.id} course={course}></CourseDetails>
			))}
		</div>
	);
};

export default Courses;
