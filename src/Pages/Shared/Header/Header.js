import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { FaUser, FaLeanpub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Navbar.Brand className="text-success">
					<FaLeanpub className="text-primary"></FaLeanpub> Self Study
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<>
							<Link
								style={{
									textDecoration: "none",
									color: "gray",
									marginTop: "5px",
									marginLeft: "10px",
								}}
								to="/"
							>
								Home
							</Link>
						</>
						<>
							<Link
								style={{
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
									textDecoration: "none",
									color: "gray",
									marginTop: "5px",
									marginLeft: "10px",
								}}
								to="/blog"
							>
								Blog
							</Link>
						</>
					</Nav>
					<Nav>
						<>
							{user?.uid ? (
								<>
									<span className="me-3" style={{ marginTop: "10px" }}>
										{user?.displayName}
									</span>
									{user?.photoURL ? (
										<>
											<Image
												style={{
													height: "40px",
													marginRight: "20px",
													border: "1px solid gray",
												}}
												roundedCircle
												src={user?.photoURL}
											></Image>
										</>
									) : (
										<FaUser className="mt-2"></FaUser>
									)}
									<Button
										className="ms-4	"
										variant="outline-danger"
										onClick={handleLogOut}
									>
										Log Out
									</Button>
								</>
							) : (
								<>
									<Link
										style={{
											marginRight: "20px",
											textDecoration: "none",
											border: "1px solid green",
											padding: "5px 20px",
											borderRadius: "5px",
										}}
										to="/login"
									>
										Login
									</Link>
									<Link
										style={{
											marginRight: "20px",
											textDecoration: "none",
											border: "1px solid blue",
											padding: "5px 20px",
											borderRadius: "5px",
										}}
										to="/register"
									>
										Register
									</Link>
								</>
							)}
						</>
						<Nav.Link eventKey={2} href="#memes"></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
