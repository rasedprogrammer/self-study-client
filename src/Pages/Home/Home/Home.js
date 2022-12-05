import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCategory from "../../CourseCategory/CourseCategory/CourseCategory";
import Courses from "../../Courses/Courses";

const Home = () => {
	const categories = useLoaderData();

	return (
		<div>
			<h3>Total Course Is {categories.length}</h3>
			{categories.map((category) => (
				<CourseCategory key={category.id} category={category}></CourseCategory>
			))}
			{categories.map((ca) => (
				<Courses key={ca.id} category={ca}></Courses>
			))}
		</div>
	);
};

export default Home;
