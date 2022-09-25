//import React from 'react';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarEmp from "./components/NavbarEmp";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CreateEmployee from "./components/create-employee";
import EditEmployee from "./components/edit-employee";
import EmployeesList from "./components/employees-list";
// import EmployeesTableRow from "./components/EmployeesTableRow";
//import logo from './logo.svg';
//import ReactDOM from "react-dom";
import './App.css';
//import { render } from '@testing-library/react';


class App extends Component {

 render(){
  return(
    <div> 
     <Router>
    <NavbarEmp/>
    {/* <CreateEmployee/>
    <EditEmployee/>
    <EmployeesList/>
    <EmployeesTableRow/> */}
        
            <Container>
                <Row>
                <Col md={12}>
                    <div className="wrapper">
                    <Switch>
                        <Route exact path='/' component={CreateEmployee} />
                        <Route path="/create-employee" component={CreateEmployee} />
                        <Route path="/edit-employee/:id" component={EditEmployee} />
                        <Route path="/employees-list" component={EmployeesList} />
                    </Switch>
                    </div>
                </Col>
                </Row>
            </Container>
          </Router>

    </div>
  );
 }
}      
  
export default App;
