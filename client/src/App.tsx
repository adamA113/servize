import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Usertype from './components/Signup/Usertype';
import Login from './components/Login/Login';
import Catagories from './components/catagories/Catagories';
import ProviderProf from './components/profiles/ProviderProf';
import ProviderView from './components/profiles/ProviderView'
import UserView from './components/profiles/UserView';
import UserProf from './components/profiles/UserProf'
import ProviderSignup from './components/Provider-signup/Provider-signup'
import UsersSignup from './components/Users-signup/Users-signup'
import Navbar from "./components/Nav-bar/Nav-bar";
import Footer from "./components/Footer/Footer";
import ForgotPassword from "./components/Forgot-password/Forgot-password";
import ResetPassword from "./components/Reset-password/Reset-password";
import ResetPasswordConfirm from "./components/Reset-password/Reset-password-confirm"
import ProviderContainer from "./components/Provider-container/Provider-container";
import ServiceProvider from "../src/components/ServiceProvider/ServiceProvider"
import Booking from "./components/booking/Booking"
import Activate from './components/Activate';
// import Search from './components/search/Search';



import Header from "./components/Header/Header";


import './App.css';
// import StarRating from './components/rates/StarRate';
import HomePage from "./pages/HomePage";
import Map from './components/map/map';
import Categories from "./components/Categories-container/Categories-container";
import Main from "./components/Main-view/Main-view";
// import './App.css';
import Test from "./components/Categories-container/test";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* < Map /> */}
        {/* <Navbar /> */}
        <Test/>
        {/* <Catagories /> */}
        {/* <ProviderProf /> */}
        {/* <ProviderView /> */}
        {/* <UserView /> */}
        {/* <UserProf /> */}
        {/* <StarRating /> */}
        {/* <Login />
        <Signup /> */}
        {/* <ProviderSignup />  */}
        {/* <Search /> */}
        {/* <Calendar /> */}
        {/* <Schedule /> */}
        {/* <Header />
        <ServiceProvider/> */}
        {/* <Booking/> */}

        <Switch>

          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/usertype" component={Usertype} />
          {/* <Route exact path="/" component={Main} /> */}
          <Route path="/prov/signup" component={ProviderSignup} />
          <Route path="/client/signup" component={UsersSignup} />
          <Route path="/user/signup" component={Signup} />
          <Route path="/user/login" component={Login} />
          {/* <Route path="/providerProfile" exact component={() => < ProviderProf/>} /> */}
          <Route path="/provider" component={ProviderContainer} />
          <Route path="/auth/users/reset_password/" component={ForgotPassword} />
          <Route path="/reset/:token" component={ResetPassword} />
          <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
          {/* <Route path="/activate/:uid/:token" component={Activate} /> */}
          <Route path="/profiles/provider" component={ProviderProf} />
          {/* <Route path="/profiles/provider" component={Schedule} /> */}
          <Route path="/profiles/providerview" component={ProviderView} />
          <Route path="/profiles/user" component={UserProf} />
          <Route path="/profiles/userview" component={UserView} />



        </Switch>

        {/* <Footer /> */}

      </div>
    </BrowserRouter>
  );
}

export default App;
