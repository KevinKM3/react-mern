import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateShoe from "./components/create-shoe.component";
import EditShoe from "./components/edit-shoe.component";
import ShoeList from "./components/shoe-list.component";


function App() {
  return (<Router>
    <div className="App">
    <header className="App-header">
    <Navbar bg="dark" variant="dark">
    <Container>

    <Navbar.Brand>
    <Link to={"/create-shoe"} className="nav-link">
    Hunter Shoe Store 
    </Link>
    </Navbar.Brand>
    
    <Nav className="justify-content-end">
    <Nav>
    <Link to={"/create-shoe"} className="nav-link">
    Create Shoe
    </Link>
    </Nav>
    
    {/* <Nav>
      <Link to={"/edit-shoe/:id"} className="nav-link">
      Edit Shoe
      </Link>
    </Nav> */}
    
    <Nav>
    <Link to={"/shoe-list"} className="nav-link">
    Shoe List
    </Link>
    </Nav>
    </Nav>
    
    </Container>
    </Navbar>
    </header>

    <Container>
    <Row>
    <Col md={12}>
    <div className="wrapper">
    <Switch>
    <Route exact path ='/' component={CreateShoe} />
    <Route path="/create-shoe" component={CreateShoe} />
    <Route path="/edit-shoe/:id" component={EditShoe} />
    <Route path="/student-list" component={ShoeList} />
    </Switch>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
    </Router>);
  }

export default App;
