import React from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSideNav = () => {
	return (
		<div>
			<ButtonGroup vertical>
				<Button variant="outline-success" className="mb-3">
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
