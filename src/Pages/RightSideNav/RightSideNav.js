import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const RightSideNav = () => {
	const { loginProvider } = useContext(AuthContext);

	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const handleGoogleLogin = () => {
		loginProvider(googleProvider)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleGithubLogin = () => {
		loginProvider(githubProvider)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<>
				<Link
					style={{
						display: "block",
						textAlign: "center",
						textDecoration: "none",
						color: "gray",
						marginTop: "5px",
						marginLeft: "10px",
					}}
					to="/courses"
				>
					Courses
				</Link>
			</>
			<>
				<Link
					style={{
						display: "block",
						textAlign: "center",
						textDecoration: "none",
						color: "gray",
						marginTop: "5px",
						marginBottom: "15px",
						marginLeft: "10px",
					}}
					to="/blog"
				>
					Blog
				</Link>
			</>
			<ButtonGroup vertical style={{ width: "100%", margin: "0, auto" }}>
				<Button
					onClick={handleGoogleLogin}
					variant="outline-success"
					className="mb-3"
				>
					<FaGoogle></FaGoogle> Login with Google
				</Button>
				<Button onClick={handleGithubLogin} variant="outline-info">
					<FaGithub></FaGithub> Login with GitHub
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default RightSideNav;
