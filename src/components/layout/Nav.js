import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../home/HomePage";
import Contact from "../contact/ContactPage";
import CardDetail from "../home/CardDetail";
import CardList from "../home/CardList";
import Grass from "../grass/GrassPage";


function NavDrop() {
 return (
   <BrowserRouter>
  <Router>
  <Navbar bg="light" expand="lg">
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="MENU" id="basic-nav-dropdown">
        <NavDropdown.Item href="Home">Home◓</NavDropdown.Item>
        <NavDropdown.Item href="Grass">Grass</NavDropdown.Item>
          <NavDropdown.Item href="Contact">Contact</NavDropdown.Item>
          </NavDropdown>
      </Nav>
    </Navbar.Collapse>  
</Navbar>
   
    <Switch>
     <Route path="/home" exact component={Home} />
     <Route path="/contact" component={Contact} />
      <Route path="/grass" component={Grass} />
   <Route path="/" exact>
    <CardList />
</Route>
<Route path="/detail:id">
    <CardDetail />
</Route>
    </Switch>
  </Router>
  </BrowserRouter>
  
 );
}

export default NavDrop;