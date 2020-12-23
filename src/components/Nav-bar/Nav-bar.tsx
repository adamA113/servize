import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { store, add } from '../../actions/Users/usersActions';
import { connect } from 'react-redux'
import { State } from '../../reducers/Users/usersReducer'
import { useTranslation } from "react-i18next";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RootStore } from '../../reducers/rootReducer';
import Button from "@material-ui/core/Button";
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import ProviderSignup from '../Provider-signup/Provider-signup'
import Logout from '../Logout/Logout';
import "./Nav-bar.css";
const axios = require('axios');
const $ = require('jquery');



$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
    } else {
        $("nav").removeClass("black");
    }
});

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    // console.log("store ===> ", userInStore)
    // console.log("store ===> ", userInStore)
    let token;
    try {
        const serializedState = localStorage.getItem("access_token");
        console.log("token",serializedState);
        if (serializedState === null) {
            token = null;
        }
         token = JSON.parse(serializedState);
    }
    catch (e) {
        console.log(e);
    }

    const handleClick = () => {
        $("#signup-form").show();
    }

    const selectLang = () => {

    }

    const openClick = () => {
        document.getElementById("mySidenav").style.width = "250px"
    }
    const closeClick = () => {
        document.getElementById("mySidenav").style.width = "0";

    }

    return (
        <header id="nav-bar">
            <nav>
                <span className="menu-icon" onClick={openClick}>
                    <i className="fa fa-bars fa-2x"></i>
                </span>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeClick}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">{t("how_it_works")}</a>
                    <a href="#">Browse Jobs</a>
                    <a href="#">Contact</a>
                </div>
                
                <a href="/" className="logo">
                    {t("app_name")}
                </a>
                <span className="menu">
                    <ul>
                        <li className="pc-view"><a href="#">{t("how_it_works")}</a></li>
                        <li className="pc-view"><a href="#">Browse Jobs</a></li>
                        <li className="lang-dropdown">
                            {/* <button onClick={selectLang} className="lang-dropbtn">Languages</button> */}
                            < div id="lang-Dropdown pc-view" className="lang-dropdown-content"> 
                                <a className="pc-view" onClick={() => i18n.changeLanguage("en")}> English</a>
                                <a className="pc-view" onClick={() => i18n.changeLanguage("ar")}>عربي</a>
                            </div>

                        </li>
                        {token === null ?
                        <span>
                            <li><Link to="/user/login">{t("log_in")}</Link></li>
                            {/* <li><Link to="/user/signup">{t("join")}</Link></li> */}
                            <li onClick={handleClick}> <a href="#">{t("join")}</a></li>
                        </span>
                        :
                        <span>
                            <li><a href="profiles/user">Profile</a></li>
                            <li>
                                <Button onClick={() => { localStorage.clear(); window.location.href = "/"; }} id="logout">
                                    Logout
                            </Button>
                            </li>
                        </span>}

                        
                    </ul>

                    {/* <div className="select">
                        <select
                            value={i18n.language}
                            onChange={(e) =>{
                                i18n.changeLanguage(e.target.value)
                                console.log(e.target.value)
                            }}
                        >
                            <option value="en">English</option>
                            <option value="ar">عربي</option>
                        </select>
                    </div> */}
                </span>
            </nav>

        </header>

    )
    // }
    // export default Navbar;
    //   return (
    //     <header id="nav-bar">
    //       <nav>
    //         <div className="menu-icon">
    //           <i className="fa fa-bars fa-2x"></i>
    //         </div>
    //         <div className="logo">
    //           <Link to="/">Servize</Link>
    //         </div>
    //         <div className="menu">
    //           <ul>
    //             <li>
    //               <a href="#">How it Works</a>
    //             </li>
    //             <li>
    //               <a href="#">Browse Jobs</a>
    //             </li>
    //             <li>
    //               <a href="#">Language</a>
    //             </li>
    //             <li>
    //               <Link to="/prov/signup">Become a Service Provider</Link>
    //             </li>
    //             <li>
    //               <Link to="/user/login">Log In</Link>
    //             </li>
    //             <li>
    //               <Link to="/user/signup">Join</Link>
    //             </li>
    //             <li>
    //               <Button
    //                 onClick={() => {
    //                   localStorage.clear();
    //                   window.location.href = "/";
    //                 }}
    //                 id="logout"
    //               >
    //                 Logout
    //               </Button>
    //             </li>
    //           </ul>
    //         </div>
    //       </nav>
    //     </header>
    //   );
}

export default Navbar;
