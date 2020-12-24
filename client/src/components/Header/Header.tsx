import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from 'react-fontawesome';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import faStyles from 'font-awesome/css/font-awesome.css'

// import { Carousel } from 'mdb-ui-kit';

import './Header.css'



export default function Header() {

	return (
		<React.Fragment>
			{/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
				<div className="container">
					<a className="navbar-brand" href="#">Creativo</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Portfolio</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav> */}
			<div className="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
				<ol className="carousel-indicators">
					<li className="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
					<li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
					<li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img alt="First slide" className="d-block w-100" src="https://t4.ftcdn.net/jpg/03/19/42/81/240_F_319428113_xtWoSqCOX9gEQtdJpel4QukCLEg5TJEH.jpg" />
						<div className="carousel-caption d-none d-md-block">
							<h5 className="animated bounceInRight" style={{ animationDelay: "1s" }} >HOME SERVICES ON-DEMAND</h5>
							<p className="animated bounceInLeft" style={{ animationDelay: "2s" }}>We're an open book, easily view all the reviews and stats of the Pro who's on the way to fix your problem.</p>
							<p className="animated bounceInRight" style={{ animationDelay: "3s" }}><a href="#">More Info</a></p>
						</div>
					</div>
					<div className="carousel-item">
						<img alt="Second slide" className="d-block w-100" src="https://i.postimg.cc/SQXZtrTZ/2.jpg" />
						<div className="carousel-caption d-none d-md-block">
							<h5 className="animated slideInDown" style={{ animationDelay: "1s" }}>web design</h5>
							<p className="animated fadeInUp" style={{ animationDelay: "2s" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
							<p className="animated zoomIn" style={{ animationDelay: "3s" }}><a href="#">More Info</a></p>
						</div>
					</div>
					<div className="carousel-item">
						<img alt="Third slide" className="d-block w-100" src="https://i.postimg.cc/Jh4x3cH5/3.jpg" />
						<div className="carousel-caption d-none d-md-block">
							<h5 className="animated zoomIn" style={{ animationDelay: "1s" }} >Digital Marketing</h5>
							<p className="animated fadeInLeft" style={{ animationDelay: "2s" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
							<p className="animated zoomIn" style={{ animationDelay: "3s" }}><a href="#">More Info</a></p>
						</div>
					</div>
				</div><a className="carousel-control-prev" data-slide="prev" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span></a> <a className="carousel-control-next" data-slide="next" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="sr-only">Next</span></a>
			</div>
		</React.Fragment >
	)
}
