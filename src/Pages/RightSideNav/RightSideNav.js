import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const RightSideNav = () => {
	const { googleLoginProvider } = useContext(AuthContext);

	const googleprovider = new GoogleAuthProvider();

	const handleGoogleLogin = () => {
		googleLoginProvider(googleprovider)
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
				<Button variant="outline-info">
					<FaGithub></FaGithub> Login with GitHub
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default RightSideNav;
