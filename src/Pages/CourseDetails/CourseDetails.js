import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
	const { id, name, image, details } = course;
	return (
		<Card className="w-100 mb-3">
			<Image className="w-25 m-auto p-3 " src={image}></Image>
			<Card.Body>
				<Card.Title className="text-center p-3">{name}</Card.Title>
				<Card.Text className="text-center p-3">
					{details.length > 250 ? (
						<p>{details.slice(0, 250) + "..."} </p>
					) : (
						<p>{details}</p>
					)}
				</Card.Text>
				<Link
					className="d-grid gap-2 text-decoration-none"
					to={`/categories/${id}`}
				>
					<Button variant="secondary" size="lg">
						Read More
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default CourseDetails;
