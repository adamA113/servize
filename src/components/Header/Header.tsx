import React, { useEffect, useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from 'react-fontawesome';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import faStyles from 'font-awesome/css/font-awesome.css'

import './Header.css'



export default function Header() {

    return (
        <div className="wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <header id="header">

                            <div className="slider">
                                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                                    {/* Wrapper for slides   */}
                                    <div className="carousel-inner" role="listbox">
                                        <div className="item active">
                                            <img src="http://placehold.it/1200x400/F34336/F34336&text=WORDPRESS THEME DEVELOPER" />
                                        </div>
                                        <div className="item">
                                            <img src="http://placehold.it/1200x400/20BFA9/ffffff&text=CLEAN %26 SMART" />
                                        </div>
                                    </div>

                                    {/* Controls  */}
                                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                        <span className="fa fa-angle-left" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                        <span className="fa fa-angle-right" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            {/* slider  */}
                            <nav className="navbar navbar-default">
                                {/* Brand and toggle get grouped for better mobile display  */}
                                <div className="navbar-header">

                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNav">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    {/* <a className="navbar-brand" href="#"><img className="img-responsive" src="http://rolyart.ro/wp-content/uploads/2016/07/roland-maruntelu-freelancer-romania.jpg" /></a>
                                    <span className="site-name"><b>Roland</b> Maruntelu</span>
                                    <span className="site-description">worpress theme developer</span> */}
                                </div>

                                {/* Collect the nav links, forms, and other content for toggling  */}
                                {/* <div className="collapse navbar-collapse" id="mainNav" >
                                    <ul className="nav main-menu navbar-nav">
                                        <li><a href="#"><i className="fa fa-home"></i> HOME</a></li>
                                        <li><a href="#">Link</a></li>
                                        <li><a href="#">Link</a></li>
                                    </ul>

                                    <ul className="nav  navbar-nav navbar-right">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div> */}
                                {/* /.navbar-collapse  */}
                            </nav>

                        </header>
                        {/* /#HEADER */}
                    </div>
                </div>
            </div>
        </div>
    )
}