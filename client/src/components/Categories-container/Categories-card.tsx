import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProv } from '../../actions/Providers/providersActions';
import SubCategories from "./subCategories";
import './Categories-card.css';
import $ from 'jquery';
import axios from "axios";

const CategoriesCard = ({ user }: { user: any }) => {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    // console.log("hi", user)
    const handleClick = () => {
        axios.post(`http://localhost:8000/category/providers/`, {
            catName: user.catName,
        })

            .then((result: any) => {
                console.log("axios", result.data[0].providers)
                dispatch(getProv(result.data[0].catName, result.data[0].providers))

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })
    }
    return (

        <div className="card card-block" >
            <img className="cat-img" src={user.catImg} />
            <button onClick={handleClick}>
                <h5 className="card-title "><Link to="/provider">{user.catName}</Link></h5>
            </button>

            {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
        </div>
    )
}

export default CategoriesCard;