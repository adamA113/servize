import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer" className="page-footer font-small mdb-color pt-4">

            <div className="container text-center text-md-left">

                <div className="row text-center text-md-left mt-3 pb-3">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                        consecteturadipisicing elit.</p>
                    </div>

                    <hr className="w-100 clearfix d-md-none"/>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Categories</h6>
                        <p>
                            <a href="#!">Cat</a>
                        </p>
                        <p>
                            <a href="#!">Cat</a>
                        </p>
                        <p>
                            <a href="#!">Cat</a>
                        </p>
                        <p>
                            <a href="#!">Cat</a>
                        </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none"/>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">About</h6>
                        <p>
                            <a href="#!">Terms of Service</a>
                        </p>
                        <p>
                            <a href="#!">Privacy Policy</a>
                        </p>
                        <p>
                            <a href="#!">Partnerships</a>
                        </p>
                        <p>
                            <a href="#!">Help</a>
                        </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none"/>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Apps</h6>
                        <p>
                            <i className="fas fa-home mr-3"></i> App store</p>
                        
                        <p>
                            <i className="fas fa-print mr-3"></i> Google Play</p>
                    </div>

                </div>

                <hr/>

                <div className="row d-flex align-items-center">

                    <div className="col-md-7 col-lg-8">

                        <p className="text-center text-md-left">© 2020 Copyright:
                            <a href="https://mdbootstrap.com/">
                                <strong> servize.com</strong>
                            </a>
                        </p>

                    </div>

                    <div className="col-md-5 col-lg-4 ml-lg-0">

                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>                 
                </div>               
            </div>             
        </footer>
    )
}

export default Footer;