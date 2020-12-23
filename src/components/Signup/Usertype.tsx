import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { State } from '../../reducers/Users/usersReducer'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
// import './Signup.css';

const axios = require('axios');
const $ = require('jquery');


const Usertype = (props: any) => {
    // const handleClick = (x :boolean) => {
    //     if(x === true){
    //         <Redirect to='/'/>
    //     }
    // }
    return (
        <div id="signup" className="center styled">
            <h1>Choose what type of user:</h1>
            <br />
            <div className="user-type">

                <button type="button" className="user" ><Link to= "/client/signup">User</Link></button>
                <button type="button" className="prov" ><Link to="/prov/signup">Provider</Link></button>

            </div>
        </div>
    );
}



export default Usertype;

