import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';
// import Context from '../utils/context';
import './UserProf.css'

import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
const axios = require('axios');
const $ = require('jquery');


export default function UserProf() {

    const [test, setTest] = useState([]);

    useEffect(() => {
        axios.post(`http://localhost:8000/user/`, { user: "2" })

            .then((result: any) => {
                console.log("axios", result.data)
                // dispatch(store(result.data))

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })
    }, [test])


    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-xl-6 col-md-12">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                    <div className="card-block text-center text-white">
                                        <div className="m-b-25">
                                            <div className="profile-img">
                                                <br></br><img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="img-radius" alt="User-Profile-Image" />
                                                <div className="file btn btn-primary">
                                                    Change Photo
                                                 <input type="file" name="file" />
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="f-w-600">Name</h6><br></br>
                                        <p>job</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    </div>

                                </div>
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <br></br><br></br><h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Email</p>
                                                <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Phone</p>
                                                <h6 className="text-muted f-w-400">98979989898</h6>
                                            </div>
                                        </div>
                                        {/* <footer className="panel-footer">
                                           
                                        </footer> */}
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Recent</p>
                                                <h6 className="text-muted f-w-400">******</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Most Viewed</p>
                                                <h6 className="text-muted f-w-400">*****</h6>
                                            </div>
                                            <div>
                                                <ul className="nav nav-pills pull-center">
                                                    <li>
                                                        <a href="https://www.google.com/maps/search/?api=1">
                                                            <RoomIcon style={{ color: "blue", fontSize: "x-large" }} stroke={"blue"}
                                                                stroke-width={0} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.facebook.com/">
                                                            <FacebookIcon style={{ color: "blue", fontSize: "x-large" }}
                                                                stroke={"blue"} stroke-width={0} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/">
                                                            <InstagramIcon style={{ color: "blue", fontSize: "x-large" }}
                                                                stroke={"blue"} stroke-width={0} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.twitter.com/">
                                                            <TwitterIcon style={{ color: "blue", fontSize: "x-large" }}
                                                                stroke={"blue"} stroke-width={0} /></a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                        <div><br></br><br></br>
                                            <br></br><ul className="nav nav-pills nav-stacked">
                                                <li><a href="#"> <i className="fa fa-edit"></i> Edit profile</a></li><br /><br></br>
                                                <li className="active"><a href="#"> <i className="fa fa-user"></i> Profile</a></li>
                                                {/* <li><a href="#"> <i className="fa fa-calendar"></i> Recent Activity <span
                                className="label label-warning pull-right r-activity">  </span></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

