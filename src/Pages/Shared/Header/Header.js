import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
	const { user } = useContext(AuthContext);
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">Self Study</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">Home</Nav.Link>
						<Nav.Link href="#pricing">Courses</Nav.Link>
						<Nav.Link href="#pricing">Blog</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">{user?.displayName}</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
