import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';
// import Context from '../utils/context';
import './ProviderView.css';
import Schedule from '../calender/Schedule';
import StarRating from '../rates/StarRate';

const axios = require('axios');
const $ = require('jquery');


export default function ProviderView() {

    const [test, setTest] = useState([]);

    useEffect(() => {
        axios.post(`http://localhost:8000/serviceprovider/servProv/`, { provider: "2" })

            .then((result: any) => {
                console.log("axios", result.data)
                // dispatch(store(result.data))

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })
    }, [test])

    return (
        <div className="container emp-profile">
            {/* <form method="post"> */}
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img">
                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                        {/* <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" />
                            </div> */}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel">
                        <form>
                            <textarea placeholder="My services"
                                className="form-control input-lg p-text-area"></textarea>
                        </form>
                    </div>
                    <div className="profile-head">
                        {/* <h5>
                            Service Provider Name
                                    </h5> */}

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                {/* <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                    </div> */}
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-work">
                        <div className="profile-head">
                            <br></br><h5><br></br>
                                Service Provider Name
                                    </h5>
                        </div><br></br>
                        <ul className="nav nav-pills">
                            <li>
                                <a href="https://www.google.com/maps/search/?api=1">
                                    <RoomIcon style={{ color: "blue", fontSize: "large" }} stroke={"blue"}
                                        stroke-width={0} /></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/">
                                    <FacebookIcon style={{ color: "blue", fontSize: "large" }}
                                        stroke={"blue"} stroke-width={0} /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <InstagramIcon style={{ color: "blue", fontSize: "large" }}
                                        stroke={"blue"} stroke-width={0} /></a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/">
                                    <TwitterIcon style={{ color: "blue", fontSize: "large" }}
                                        stroke={"blue"} stroke-width={0} /></a>
                            </li>
                        </ul>
                        <br></br><p className="proile-rating"><StarRating /></p><br></br>
                        {/* <div><UploadImg /></div> */}
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
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row">
                                <Schedule />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Your Bio</label><br />
                                    <p>Your detail description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </form> */}
        </div>
    )
}

