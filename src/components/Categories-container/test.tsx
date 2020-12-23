import { WithStyles } from '@material-ui/styles';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './test.css'

import Electrican from '../catagories/elect1.jpg';
import Painting from '../catagories/paint.jpg';
import Tiling from '../catagories/tiling.jpg';
import Plaster from '../catagories/plaster.jpg';

const Test = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

    return (

        // <Carousel
        //     swipeable={false}
        //     draggable={false}
        //     showDots={true}
        //     responsive={responsive}
        //     // ssr={true} // means to render carousel on server-side.
        //     infinite={true}
        // >
            <div className="container mt-2">
                <div className="row">

                    <div className="col-md-3 col-sm-6">
                        <div className="card card-block">
                            <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                            <img src={Electrican} alt="Photo of sunset" onClick={() => { window.location.href = '/fastfoodres' }} />

                            <h5 className="card-title mt-3 mb-3">Electrican</h5>
                            {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="card card-block">
                            <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                            <img src={Painting} alt="Photo of sunset" />
                            <h5 className="card-title  mt-3 mb-3">Painting</h5>
                            {/* <p className="card-text">This is a company that builds websites, web .</p> */}
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="card card-block">
                            <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                            <img src={Tiling} alt="Photo of sunset" />
                            <h5 className="card-title  mt-3 mb-3">Tiling walls</h5>
                            {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="card card-block">
                            <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                            <img src={Plaster} alt="Photo of sunset" />
                            <h5 className="card-title  mt-3 mb-3">Plaster</h5>
                            {/* <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> */}
                        </div>
                    </div>







                    {/* <div className="card1">
                <img src="https://picsum.photos/180/100" />
                <p>description="React Carousel with Server Side Rendering Support – Part 2"
                headline="w3js.com - web front-end studio"</p>
                
            </div>
                
            
           
            <div className="card1">
                <img src="https://picsum.photos/180/100" />
                <p>description="React Carousel with Server Side Rendering Support – Part 2"
                headline="w3js.com - web front-end studio"</p>

            </div>
            <div className="card1">
                <img src="https://picsum.photos/180/100" />
                <p>description="React Carousel with Server Side Rendering Support – Part 2"
                headline="w3js.com - web front-end studio"</p>

            </div> */}

                </div>
            </div>
        // </Carousel>
    );
}

export default Test;
