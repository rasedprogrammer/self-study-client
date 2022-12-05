import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub } from "react-icons/fa";
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
			<ButtonGroup vertical>
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
