import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import GetHotel from "./components/Hotel/Index";
import HotelCreate from "./components/Hotel/HotelCreate";
import HotelUpdate from "./components/Hotel/HotelUpdate";

import RoomIndex from './components/Room/Index'
import RoomCreate from './components/Room/RoomCreate'
import RoomUpdate from './components/Room/RoomUpdate'

import Login from './components/Login/Login'
import Logout from './components/Login/Logout'

import DonDatPhong from './components/HoaDon/DonDatPhong'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">Partner</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/hotel">Hotel</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/dondatphong">Đơn đặt phòng</NavLink>
                </NavItem>
                  <NavbarText>{localStorage.getItem("email")}</NavbarText>
                  <NavItem>
                    <NavLink href="/logout">Logout</NavLink>
                  </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <Switch>
          <Route exact path="/hotel" component={GetHotel} />
          <Route  path="/hotel/create" component={HotelCreate} />
          <Route  path="/hotel/update/:id" component={HotelUpdate} />

          <Route exact path="/hotel/:id/room" component={RoomIndex}/>
          <Route path="/hotel/:id/room/create" component={RoomCreate}/>
          <Route path="/hotel/:idHotel/room/update/:id" component={RoomUpdate}/>

          <Route exact path="/logout" component={Logout}></Route>

          <Route exact path="/dondatphong" component={DonDatPhong}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
