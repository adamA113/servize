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

    return (
        <div className="card" style={{ display: "inline-block", width: "20%" }}>
            <img src={prov.picture} alt="Avatar" />
            <div className="container">
                <h4><b>{prov.name}</b></h4>
                <p>{prov.phone}</p>
                <button onClick={handleClick}>Learn More {prov.email}</button>
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

