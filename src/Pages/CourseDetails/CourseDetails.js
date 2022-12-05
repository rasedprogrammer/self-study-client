import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
	const { id, name, image, details } = course;
	return (
		<Card className="mb-4" style={{ width: "18rem" }}>
			<Card.Img variant="top" className="img-fluid p-2" src={image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					{details.length > 250 ? (
						<p>
							{details.slice(0, 250) + "..."}{" "}
							<Link to={`/categories/${id}`}>
								<Button variant="primary">Go somewhere</Button>
							</Link>
						</p>
					) : (
						<p>{details}</p>
					)}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CourseDetails;
