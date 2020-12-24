import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProv } from '../../actions/Providers/providersActions';
import ProviderContainer from "../Provider-container/Provider-container";
import './Search.css';
const axios = require('axios');
const $ = require('jquery');

const Search = () => {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const [category, setCategory] = useState("");
    const [city, setCity] = useState("");
    // const [results, setResults] = useState([
    //     {
    //         name: "Nablus",
    //         serviceProviders: [{
    //             name: "adam",
    //             phone: "1254782",
    //             picture: "https://api.fixawy.net/storage/images/categories/cat_1.svg",
    //             catname: "Electrician"
    //         }]
    //     }]);

    const handleClick = async () => {
        console.log('aaaaaaaaaaaaaaaaaaaaa',city)

            await axios.post(`http://localhost:8000/location/loc/`,      //url for sending the request ?
                {
                    name: city,
                    // category: category
                })

                .then((result: any) => {
                    console.log("axios", result.data)
                    // dispatch(getProv(result.data[0].name, result.data[0].serviceProviders))  
                    // setResults(result.data)
                    // redirect to the provider page  path= '/provider'

                })
                .catch((err: any) => {
                    console.error("err===== =>", err);
                })
        // }
        // console.log("========", result)
        // const handleChange = () => {

        }
        console.log(category)

        return (

            <div>
                <input type="text" placeholder="search.."></input>

                <div className="cat dropdown">
                    {/* <button className="dropbtn" onClick={()=>{setCat(!cat)}}>Category</button> */}
                    <select className="dropdown-cat" onChange={(e) => { setCategory(e.target.value) }}>
                        <option>Electrician</option>
                        <option>Plumber</option>
                        <option>Carpenter</option>
                    </select>
                </div>

                <div className="city dropdown">
                    {/* <button className="dropbtn" onClick={()=>{setCity(!city)}}>City</button> */}
                    <select className="dropdown-city" onChange={(e) => { setCity(e.target.value) }}>
                        <option>Ramallah</option>
                        <option>Nablus</option>
                        <option>Hebron</option>
                        <option>Jenin</option>
                        <option>Tulkarem</option>
                        <option>Jericho</option>


                    </select>
                </div>
                <button  className = "btn-search" onClick={handleClick}>Submit</button>
                {/* <ProviderContainer results={results} city={city} category={category} /> */}
            </div>
        )
    }

    export default Search;