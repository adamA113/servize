import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';
import StarRating from '../rates/StarRate';
// import Schedules from '../calender/Schedule';
import Schedules from '../calender/CalEvent'
// import CalenderEvent from '../CalendarEvent/cal';
// import Context from '../utils/context';
import Schedule from '../calender/Schedule';
import './ProviderView.css'

import UploadImg from '../profiles/uploadImg';

import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const axios = require('axios');
const $ = require('jquery');

interface servData {
    picture: string,
    name: string,
    email: string,
    phone: string
}
const data: servData = {
    picture: '',
    name: '',
    email: '',
    phone: ''
};

export default function ProviderProf() {
    //for upload image 

    // state = { selectedFile: null }

    // fileChangedHandler = event => {
    //   this.setState({ selectedFile: event.target.files[0] })
    // }

    const [test, setTest] = useState([]);
    const [servData, setservData] = useState(data);

    useEffect(() => {
        axios.post(`http://localhost:8000/serviceprovider/servProv/`, { provider: "2" })

            .then((result: any) => {
                console.log("axios", result.data[0])
                // dispatch(store(result.data))
                setservData({ picture: result.data[0].picture, name: result.data[0].name, email: result.data[0].email, phone: result.data[0].phone });

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })
    }, [test])



    // const handleClick = (e: any) => {
    //     axios.post(`http://localhost:8000/serviceprovider/servProv/`,
    //         {
    //             provider: "2",
    //         })
    //         .then((results: any) => {
    //             console.log("axios", results);
    //         })
    //         .catch((err: any) => {
    //             console.error("err===== =>", err);
    //         })

    // }


    // const userInStore = useSelector((state: any) => state.user);
    // const dispatch = useDispatch();
    // const handleClick = (e: any) => {
    //     axios.post(`http://127.0.0.1:8000/serviceprovider/servProv/`,
    //         {
    //             provider: "2",
    //         })
    //         .then((results: any) => {
    //             console.log("axios", results);
    //         })
    //         .catch((err: any) => {
    //             console.error("err===== =>", err);
    //         })

    // }

    return (
        <div className="container emp-profile">
            <form >
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <br></br><img src={servData.picture} className="avatar img-circle img-thumbnail" alt="avatar" />
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" />
                            </div>
                            <h5>
                                {servData.name}
                            </h5>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <div>
                                <br></br>
                                <ul className="nav nav-pills pull-right">
                                    <li><a href="#"> <i className="fa fa-edit pull-right"></i> Edit profile</a></li><br /><br></br>
                                    <li className="active "><a href="#"> <i className="fa fa-user"></i> Profile</a></li>
                                </ul><br></br>
                            </div><br></br>

                            <div>
                                <br></br><div className="panel">
                                    <form>
                                        <br></br><textarea placeholder="Describe your services"
                                            className="form-control input-lg p-text-area"></textarea>
                                    </form>
                                    <footer className="panel-footer">
                                        <button className="button pull-right" type="submit">Post</button>
                                    </footer>
                                </div>
                                <div className="panel">
                                    Helllllllllo
                            </div><br></br>

                                <div>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <div>
                                <ul className="nav nav-pills">
                                    <li>
                                        <a href="https://www.google.com/maps/search/?api=1">
                                            <RoomIcon style={{ color: "blue", fontSize: "large" }} stroke={"blue"}
                                                stroke-width={1} /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/">
                                            <FacebookIcon style={{ color: "blue", fontSize: "large" }}
                                                stroke={"blue"} stroke-width={1} /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/">
                                            <InstagramIcon style={{ color: "blue", fontSize: "large" }}
                                                stroke={"blue"} stroke-width={1} /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/">
                                            <TwitterIcon style={{ color: "blue", fontSize: "large" }}
                                                stroke={"blue"} stroke-width={1} /></a>
                                    </li>
                                </ul>
                            </div>
                            <p className="proile-rating"><StarRating /></p><br></br>
                            <div>
                                <Form>
                                    <Form.Group>
                                        <div><UploadImg /></div>
                                        <Form.File id="exampleFormControlFile1" label="Example file input" />
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Kshiti123</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>kshitighelani@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Occupation</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Electrical</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>123 456 7890</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>City</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>City</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row">
                                <Schedule />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Your Bio</label><br />
                                    <p>Your detail description</p>

                                </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}


