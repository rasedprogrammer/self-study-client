import React, { useEffect, useState } from "react";
import CourseDetailsPage from "../../CourseDetailsPage/CourseDetailsPage";

const CourseCategory = () => {
	const [courseCategories, setCourseCategories] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/categories`)
			.then((response) => response.json())
			.then((data) => setCourseCategories(data));
	}, []);
	return (
		<div>
			<h2>Category List: {courseCategories.length}</h2>
			{courseCategories.map((course) => (
				<CourseDetailsPage key={course.id} course={course}></CourseDetailsPage>
			))}
		</div>
	);
};

export default CourseCategory;
