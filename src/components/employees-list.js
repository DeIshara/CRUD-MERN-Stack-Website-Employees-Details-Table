import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import EmployeesTableRow from './EmployeesTableRow';


export default class EmployeesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/employees/')
      .then(res => {
        this.setState({
          employees: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.employees.map((res, i) => {
      return <EmployeesTableRow obj={res} key={i} empdata={this.state.employees}/>;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>EmpID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}