import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Login = () => {
	const [error, setError] = useState();
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((result) => {
				const user = result.user;
				form.reset();
				setError("");
				navigate(from, { replace: true });
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
			});
	};

	return (
		<Form onSubmit={handleSubmit} className="w-50 m-auto">
			<h2>Login</h2>
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
				Login
			</Button>
			<p>
				Create new account, <Link to="/register">Register</Link>
			</p>
		</Form>
	);
};

export default Login;
