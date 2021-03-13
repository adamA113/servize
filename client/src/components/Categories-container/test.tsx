import { WithStyles } from '@material-ui/styles';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './test.css'

import Electrican from '../catagories/elect1.jpg';
import Painting from '../catagories/paint.jpg';
import Tiling from '../catagories/tiling.jpg';
import Plaster from '../catagories/plaster.jpg';
import Alumini from '../catagories/alamunuim.jpg';
import Carpenter from '../catagories/carpenter.jpg';
// import Satellite from '../catagories/satalite.jpg';
// import Parquet from '../catagories/parquet.jpg';
// import Gypsum from '../catagories/jypsum.jpg';
// import Appliance from '../catagories/light.jpg';

const Test = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
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


        <Carousel responsive={responsive} arrows={false} autoPlay={true} autoPlaySpeed={5000}>

            <div className="cat-container">
                <div className="card-item">
                    <img className="cat-img" src={Electrican} alt="Photo of sunset" />
                    <h5 className="card-title mt-3 mb-3">Electrican</h5>   
                </div>
            </div>

            <div className="cat-container">
                <div className="card-item">
                    <img className="cat-img" src={Painting} alt="Photo of sunset" />
                    <h5 className="card-title mt-3 mb-3">Electrican</h5>
                </div>
            </div>

            <div className="cat-container">
                <div className="card-item">
                    <img className="cat-img" src={Tiling} alt="Photo of sunset" />
                    <h5 className="card-title mt-3 mb-3">Electrican</h5>
                </div>
            </div>

            <div className="cat-container">
                <div className="card-item">
                    <img className="cat-img" src={Plaster} alt="Photo of sunset" />
                    <h5 className="card-title mt-3 mb-3">Electrican</h5>
                </div>
            </div>

            <div className="cat-container">
                <div className="card-item">
                    <img className="cat-img" src={Alumini} alt="Photo of sunset" />
                    <h5 className="card-title mt-3 mb-3">Electrican</h5>
                </div>
            </div>

            <div className="cat-container">
                <div className="card-item">
                    <img className="cat-img" src={Carpenter} alt="Photo of sunset" />
                    <h5 className="card-title mt-3 mb-3">Electrican</h5>
                </div>
            </div>
       
                {/* <div><img className ="test" src={Electrican} alt="Photo of sunset" /></div>
            <div><img className="test" src={Painting} alt="Photo of sunset" /></div>
            <div><img className="test" src={Tiling} alt="Photo of sunset" /></div>
            <div><img className="test" src={Plaster} alt="Photo of sunset" /></div> */}
    

        </Carousel>
    );
}

export default Test;
