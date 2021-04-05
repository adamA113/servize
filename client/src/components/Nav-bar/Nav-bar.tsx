import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openLoginForm, openSignupForm } from '../../actions/Users/usersActions';
import { State } from '../../reducers/Users/usersReducer'
import { useTranslation } from "react-i18next";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RootStore } from '../../reducers/rootReducer';
import Button from "@material-ui/core/Button";
import ProviderSignup from '../Provider-signup/Provider-signup'
import Logout from '../Logout/Logout';
import "./Nav-bar.css";
import $ from 'jquery';

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("white");
    } else {
        $("nav").removeClass("white");
    }
});

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    // console.log("store ===> ", userInStore)
    let token: any;
    try {
        const serializedState = localStorage.getItem("access");
        console.log("token", serializedState);
        if (serializedState === null) {
            token = null;
        }
        token = JSON.parse(serializedState);
    }
    catch (e) {
        console.log(e);
    }

    const selectLang = () => {

    }

    const openClick = () => {
        document.getElementById("mySidenav").style.width = "200px"
    }
    const closeClick = (e: any) => {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "0";

    }

    return (
        <nav id="nav-bar">
            <div className="menu-icon" onClick={openClick}>
                <i className="fa fa-bars fa-2x"></i>
            </div>

            <div id="mySidenav" className="sidenav">
                <a href="/" className="sidenav-logo">Servize</a>
                <a href="/" className="closebtn" onClick={closeClick}>&times;</a>
                <a href="#">About</a>
                <a href="#">{t("how_it_works")}</a>
                <a href="#">Browse Jobs</a>
                <a href="#">Contact</a>
            </div>

            <div className="logo-container">
                <a href="/" className="logo">
                    {t("app_name")}
                </a>
            </div>

            <div className="navbar-items">
                <a href="#" className="pc-view">{t("how_it_works")}</a>
                <a href="#" className="pc-view">{t("Browse_Jobs")}</a>

                {/* <li className="lang-dropdown">
                        <button onClick={selectLang} className="lang-dropbtn">Languages</button>
                        < div id="lang-Dropdown pc-view" className="lang-dropdown-content">
                            <span className="pc-view-lang" onClick={() => i18n.changeLanguage("en")}> English</span>
                            <span className="pc-view-lang" onClick={() => i18n.changeLanguage("ar")}>عربي</span>
                        </div>

                    </li> */}
                {token === null ?
                    <div className="user-register">
                        {/* <li><Link to="/user/login">{t("log_in")}</Link></li> */}
                        <div className="pc-view" onClick={openLoginForm}>{t("log_in")}</div>
                        {/* <li><Link to="/user/signup">{t("join")}</Link></li> */}
                        <div className="pc-view" onClick={openSignupForm}>{t("join")}</div>

                    </div>
                    :
                    <div>
                        <li><a href="profiles/user">Profile</a></li>
                        <li>
                            <Button onClick={() => { localStorage.clear(); window.location.href = "/"; }} id="logout">
                                Logout
                            </Button>
                        </li>
                    </div>}

                <div className="toggle-container">
                    <label htmlFor="dark-mode" style={{ "display": "none" }}>dark mode switch</label>
                    <input type="checkbox" id="dark-mode" />
                    <div className="slider round"></div>
                </div>

            </div>

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
        </nav>
    )
}

export default Navbar;