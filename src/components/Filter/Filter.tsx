import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { signUp } from '../../actions/Users/usersActions';
import './Nav-bar.css';
const axios = require('axios');
const $ = require('jquery');

const Navbar = () => {
    const userInStore = useSelector((state: any) => state.user);
    // const serializedState: any = localStorage.getItem("state");
    // const userInStore = JSON.parse(serializedState) 
    const dispatch = useDispatch();
    // console.log("store ===> ", userInStore)

    const handleClick = () => {
        $("#signup-form").show();
    }

    const test = () => {
    //     axios.post(`http://localhost:8000/category/`)

    //         .then((result: any) => {
    //             console.log("axios", result.data)
    //             dispatch(store(result.data))

    //         })
    //         .catch((err: any) => {
    //             console.error("err===== =>", err);
    //         })

    }

    return (
        <div>
            <div>
                Availability
            </div>

            <div>
                City
            </div>

            <div>
                Category
            </div>

            <div>
                Price
            </div>
            <div>
                Rating
            </div>
        </div>
       

    )
}
export default test;