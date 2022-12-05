import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

const CourseDetailsPage = () => {
	const categories = useLoaderData();
	console.log(categories);
	const { name, image, details } = categories[0];
	return (
		<Card>
			<Card.Img variant="top" className="w-25 m-auto p-3" src={image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text className="text-justify">{details}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CourseDetailsPage;
