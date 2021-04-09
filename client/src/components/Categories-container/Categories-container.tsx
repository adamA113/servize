import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../../actions/Users/usersActions';
import { connect } from 'react-redux'
import CategoriesCard from "./Categories-card";
import { State } from '../../reducers/Users/usersReducer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import $ from 'jquery';
import axios from "axios";
import './Categories-container.css';

import Electrican from '../catagories/elect1.jpg';
import Painting from '../catagories/paint.jpg';
import Tiling from '../catagories/tiling.jpg';
import Plaster from '../catagories/plaster.jpg';
import Alumini from '../catagories/alamunuim.jpg';
import Carpenter from '../catagories/carpenter.jpg';
import Satellite from '../catagories/satalite.jpg';
import Parquet from '../catagories/parquet.jpg';
import Gypsum from '../catagories/jypsum.jpg';
import Appliance from '../catagories/light.jpg';

var catImages = [{ catImg: Electrican, catName: "Electrican" },
{ catImg: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png", catName: "Painting" },
{ catImg: Tiling, catName: "Tiling" },
{ catImg: Plaster, catName: "Tiling" },
{ catImg: Alumini, catName: "Alumini" },
{ catImg: Carpenter, catName: "Carpenter" },
{ catImg: Satellite, catName: "Satellite" },
{ catImg: Parquet, catName: "Parquet" },
{ catImg: Gypsum, catName: "Gypsum" },
{ catImg: Appliance, catName: "Appliance" }
]

const Categories = (props: any) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

    const [cat, setCat] = useState([]);
    const [test, setTest] = useState([]);
    // const userInStore = useSelector((state: any) => state.user);
    // const dispatch = useDispatch();
    // const userInStore = props.user.user;
    // console.log("store ===> ", userInStore)
    console.log("store ===> ", cat)

    // useEffect(() =>{
    //     axios.get(`http://localhost:8000/category/`)

    //         .then((result: any) => {
    //             // console.log("axios", result.data)
    //             // dispatch(store(result.data))
    //             setCat(result.data)

    //         })
    //         .catch((err: any) => {
    //             console.error("err===== =>", err);
    //         })
    // },[test])


    // if (userInStore !== undefined) {
    return (
        <div className="slides-container" >
            <Carousel responsive={responsive} infinite={true} containerClass="carousel-container">
                {catImages.map((user: any, index: any) =>
                    <CategoriesCard
                        key={index}
                        user={user}
                    />
                )}
            </Carousel >
        </div>
    )
}

const mapStateToProps = (state: State) => ({
    user: state.user,
})

const mapDispatchToProps = { signUp }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);