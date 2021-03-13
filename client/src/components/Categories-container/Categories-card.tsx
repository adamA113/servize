import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProv } from '../../actions/Providers/providersActions';
import SubCategories from "./subCategories";
import './Categories-card.css';
const axios = require('axios');
const $ = require('jquery');

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


        // <div className="cat-container">
        //     <div className="card-item">
        //         <img className="cat-img" src={user} alt="Photo of sunset" />
        //         <h5 className="card-title mt-3 mb-3">Electrican</h5>
        //     </div>
        // </div>

        // <div className="cat-container">
        //     <div className="card-item">
        //         <img className="cat-img" src={Electrican} alt="Photo of sunset" />
        //         <h5 className="card-title mt-3 mb-3">Electrican</h5>
        //     </div>
        // </div>

        // <div className="card" style={{ display: "flex" }}>
        //     <img src={user.catImage} alt="Avatar" />
        //     <div className="container">
        //         <   h4><b>{user.catName}</b></h4>
        //         {/* <p>Architect Engineer</p> */}

        //         <button onClick={handleClick}>
        //             <Link to="/provider">Learn More</Link>
        //         </button>

        //         {/* <SubCategories user={user.subCategories} /> */}
        //     </div>
        // </div>
    )
}



export default CategoriesCard;