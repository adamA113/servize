import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import SubCategories from "../Categories-container/subCategories";
// import './Provider-card.css';

const ProviderCard = ({ prov }: { prov: any }) => {
    // const userInStore = useSelector((state: any) => state.user);
    // const dispatch = useDispatch();

    const handleClick = () => {

    }
    ////////////////////////////////
    // <div className="card" style={{ display: "inline-block", width: "20%" }}>
    //     <img src={prov.picture} alt="Avatar" />
    //     <div className="container">
    //         <h4><b>{prov.name}</b></h4>
    //         <p>{prov.phone}</p>
    //         <button onClick={handleClick}>Learn More {prov.email}</button>
    //     </div>
    // </div>

    /////////////////////////////////////////
    return (
        <div>
      <h2 className="font-weight-bold mb-2">Our Team</h2>
      <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      
      <div className="row pb-5 mb-4">

        <div className="card shadow-sm border-0 rounded" >
            <div className="card-body p-0" id={prov.picture} ><img src="" alt="" className="w-100 card-img-top" onClick={() => { window.location.href = "http://google.com" }} />
                <div className="p-4">
                    <h5 className="mb-0">{prov.name}</h5>
                    <p className="small text-muted">{prov.phone}</p>
                    <p className="small text-muted">{prov.email}</p>
                    <ul className="social mb-0 list-inline mt-3">
                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>

    );
}

export default ProviderCard;

 // < div className="col-md-3 d-none d-md-block" style={{"display":"inline-block"}}>
        //     <div className="card mb-2">
        //         <img className="card-img-top" src={user.catImage}/>
        //         <div className="card-body">
        //             <h4 className="card-title" >{user.catName}</h4>
        //             {/* <p className="card-text">{user.catImage}</p> */}
        //             <a className="btn btn-primary">Learn more</a>
        //         </div>
        //     </div>
        // </div >

