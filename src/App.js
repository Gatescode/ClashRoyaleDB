import './App.css';
import people from './img/people.jpg';
import logo from './img/logo.jpg';
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Helmet } from "react-helmet";

function App() {
	return (
		<div className="App">

			<Helmet>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />

				<style>
					{`
						body {
							overflow-x: hidden;
							background-color: mediumslateblue;
						}
					`}
				</style>
			</Helmet>
			<Navbar variant="dark" className="nav-bar">
				<Container>
					<Navbar.Brand href="#">White Station Computing Club</Navbar.Brand>
					<Nav className="nav-links">
						<Nav.Link href="#">Home</Nav.Link>
						<Nav.Link href="#">About Us</Nav.Link>
						<Nav.Link href="#">Projects</Nav.Link>
						<Nav.Link href="#">Join Us</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			<div className="group-logo-wrapper">
				<img src={logo} className="logo"/>
				<img src={people} className="group-pic1"/>
			</div>
			<br />
			<div className="short-quote">
				<p>
					Learning to write programsur mind, and helps you think better, creates a way of thinking about things that are helpful in all domains. <span><em> - Bill Gates </em></span>
				</p>
			</div>
			<div className="short-desc">
				<p>
					Here at White Station High School, our computing club offers an in-depth guide to all aspects of computer science for anyone interested in programming, algorithms, design, and more, regardless of skill level.
				</p>
			</div>
			<div className="copyright-container">
				<p className="copyright">
					&#169; 2022 White Station Computing Club. The material on this site may not be reproduced, distributed, transmitted, or otherwise used, except with the prior written permission of WSCC (White Station Computing Club).
				</p>
			</div>
		</div>
	);
}

export default App;
