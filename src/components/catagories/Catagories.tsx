import React from 'react';
import { MDBCard, MDBCardImage, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Catagories.css';

////////////images/////////
import Electrican from './elect1.jpg';
import Painting from './paint.jpg';
import Tiling from './tiling.jpg';
import Plaster from './plaster.jpg';
import Alumini from './alamunuim.jpg';
import Carpenter from './carpenter.jpg';
import Satellite from './satalite.jpg';
import Parquet from './parquet.jpg';
import Gypsum from './jypsum.jpg';
import Appliance from './light.jpg';



const Catagories = () => {
    return (
        <div className="container mt-2">
            <div className="row">

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                        <img src={Electrican} alt="Photo of sunset" onClick={() => { window.location.href = '/fastfoodres' }} />

                        <h5 className="card-title mt-3 mb-3">Electrican</h5>
                        {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                        <img src={Painting} alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Painting</h5>
                        {/* <p className="card-text">This is a company that builds websites, web .</p> */}
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                        <img src={Tiling} alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Tiling walls</h5>
                        {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                        <img src={Plaster} alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Plaster</h5>
                        {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                        <img src={Alumini} alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Alumini</h5>
                        {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                        <img src={Carpenter} alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Carpenter</h5>
                        {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                        <img src={Satellite} alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Satellite</h5>
                        {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                        <img src={Parquet} alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Parquet</h5>
                        {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                        <img src={Gypsum} alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Gypsum</h5>
                        {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                        <img src={Appliance} alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Appliance</h5>
                        {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Catagories;