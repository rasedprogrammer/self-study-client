import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightSideNav from "../Pages/RightSideNav/RightSideNav";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
	return (
		<div>
			<Header></Header>
			<Container className="mt-3">
				<Row>
					<Col lg="10">
						<Outlet></Outlet>
					</Col>
					<Col lg="2">
						<RightSideNav></RightSideNav>
					</Col>
				</Row>
			</Container>
			<Footer></Footer>
		</div>
	);
};

export default Main;
