import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./components/component/Header";
import Nav from "./components/component/Nav";
import GetCity from "./components/city/GetCity";
import banner from "./images/banner.png";
import Form from "./components/component/Form";
import Body from "./components/component/Body";
import Footer from "./components/component/Footer";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Logout from "./components/login/Logout";
import DetailHotel from './components/hotel/DetailHotel';
import DetailCity from "./components/city/DetailCity";
import DonDatPhong from "./components/dondatphong/Index"

import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Switch,
} from "react-router-dom";

function App() {
  const event=()=>{
    document.getElementById("overlay").addEventListener("click", function() {
      document.getElementById("hiddenForm").style.display="none"
      document.getElementById("overlay").style.display="none"
    })
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="appAll" id="appAll"> 
            <div id="overlay" onClick={event}></div>
            <div className="head">
              <Header />
              <Nav />
            </div>
            <div>
              <img src={banner} id="banner" />
              <div className="d-flex justify-content-center" id="dflex">
                <Form />
              </div>
              <Body />
              <GetCity />
              <Footer />
            </div>
          </div>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register" component={SignUp}></Route>
        <Route path="/city/detail/:id" component={DetailCity}></Route>
        <Route path="/hotel/detail/:id" component={DetailHotel}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Route exact path="/datphong/:id" component={DonDatPhong}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
