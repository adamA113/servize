import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { signUp } from '../../actions/Users/usersActions';
import './Categories-card.css';
const axios = require('axios');
const $ = require('jquery');

const SubCategories = ({ user }: { user: any }) => {
    // const userInStore = useSelector((state: any) => state.user);
    // const serializedState: any = localStorage.getItem("state");
    // const userInStore = JSON.parse(serializedState) 
    // const dispatch = useDispatch();
    // console.log("store ===> ", userInStore)

    if (user.length > 0) {
        return (
            <div className="card" style={{ display: "flex" }}>
                <img src={user[0].subImage} alt="Avatar" />
                <div className="container">
                    <   h4><b>{user[0].subName}</b></h4>
                    {/* <p>Architect Engineer</p> */}
                    {/* <button onClick={handleClick}>Learn More</button> */}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="list">
                {/* <h1>Hello</h1> */}
            </div>
        )

    }
}

export default SubCategories;