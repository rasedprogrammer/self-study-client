import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCategory from "../../CourseCategory/CourseCategory/CourseCategory";

const Home = () => {
	const categories = useLoaderData();

	return (
		<div>
			{categories.map((category) => (
				<CourseCategory key={category.id} category={category}></CourseCategory>
			))}
		</div>
	);
};

export default Home;
