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
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
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
    // }
    // else {
    //     return (
    //         <div className="list">
    //             {/* <h1>Hello</h1> */}
    //         </div>
    //     )

    // }

    // <div id="cat-img" className="carousel slide carousel-multi-item" data-ride="carousel">


    //  <div className="controls-top">
    //         <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
    //         <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
    //     </div> 



    // <ol className="carousel-indicators">
    //     <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
    //     <li data-target="#multi-item-example" data-slide-to="1"></li>
    //     <li data-target="#multi-item-example" data-slide-to="2"></li>
    // </ol> 


    //    <div className="carousel-item">

    //         <div className="row">

    //             <div className="col-md-3">
    //                 <div className="card mb-2">
    //                     <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
    //                         alt="Card image cap" />
    //                     <div className="card-body">
    //                         <h4 className="card-title">Card title</h4>
    //                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
    //         card's content.</p>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className="col-md-3 d-none d-md-block">
    //                 <div className="card mb-2">
    //                     <img className="card-img-top" src="https://picsum.photos/seed/picsum/200/160"
    //                         alt="Card image cap" />
    //                     <div className="card-body">
    //                         <h4 className="card-title">Card title</h4>
    //                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
    //         card's content.</p>
    //                         <a className="btn btn-primary">Button</a>
    //                     </div>
    //                 </div>
    //             </div>

    //             <Link to="/provider">
    //                 <div className="tset" onClick={handleClick}>
    //                     <div className="">
    //                         <a className="" >
    //                         <Link to="/provider">
    //                             <h4 className="">Card title</h4>
    //                         </Link> 
    //                             <p className="">Some quick example text to build on the card title and make up the bulk of the
    //             card's content.</p>

    //                             <img className="" src=""
    //                                 alt="Card image cap" />
    //                         </a>
    //                     </div>
    //                 </div>
    //             </Link>

    //         </div>

    //     </div>



    // </div>
    // );
}

const mapStateToProps = (state: State) => ({
    user: state.user,
})

const mapDispatchToProps = { signUp }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);