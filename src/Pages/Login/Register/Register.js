import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Register = () => {
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const [error, setError] = useState();
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		createUser(email, password)
			.then((result) => {
				const user = result.user;
				form.reset();
				setError("");
				console.log(user);
				handleUpdateUserProfile(name, photoURL);
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
			});
	};
	const handleUpdateUserProfile = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};
		updateUserProfile(profile)
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<Form onSubmit={handleSubmit} className="w-50 m-auto">
			<h2>Register</h2>
			<Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
				<Form.Label>Your Name</Form.Label>
				<Form.Control name="name" type="text" placeholder="Enter Name" />
			</Form.Group>
			<Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
				<Form.Label>Photo URL</Form.Label>
				<Form.Control
					name="photoURL"
					type="text"
					placeholder="Enter Photo URL"
				/>
			</Form.Group>
			<Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					name="email"
					type="email"
					placeholder="Enter email"
					required
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					name="password"
					type="password"
					placeholder="Password"
					required
				/>
			</Form.Group>
			<Form.Text className="text-danger">{error}</Form.Text> <br />
			<br />
			<Button className="mb-3" variant="primary" type="submit">
				Register
			</Button>
			<p>
				Already have an account, <Link to="/login">Login</Link>
			</p>
		</Form>
	);
};

export default Register;
