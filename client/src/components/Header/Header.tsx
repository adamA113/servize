import 'bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from 'react-fontawesome';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import faStyles from 'font-awesome/css/font-awesome.css'


// import './Header.css'

const Header = () => {

	return (

		<div className="carousel slide newheader" data-ride="carousel" id="carouselExampleIndicators">
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
					<img alt="Second slide" className="d-block w-100" src="https://img1.wsimg.com/isteam/stock/wDBNRAR" />
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

	)
}

export default Header;
