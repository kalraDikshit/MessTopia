import React, { Component } from 'react';
import axios from 'axios';
import {FormGroup,FormControl,Table} from 'react-bootstrap';
import {FaCheck, FaClose} from 'react-icons/lib/fa';

export default class Home extends Component{
    
    constructor(){
        super();
        this.state  = {
          filterText:"",
          students:[],
          isLoading:true,
        }
        
        const url = 'http://localhost:5000';
        axios.get(url+'/api/latesteat').then((response)=>{
          console.log(response.data.response);
          this.setState({
            students:response.data.response,
            isLoading:false
          })
        }).catch(function(error){
          console.log(error);
        })
      }

      handleUpdateInput(){
        let value =  window.document.getElementById('filter').value;
        this.setState({
          filterText:value
        });
      };
    
    render(){
        let updatedTable=[];
        this.state.students.map(function(student,i){
            let roll = student.rollNo.toString();
            let firstName = student.name.split(' ')[0].toString().toLowerCase();
            let lastName = student.name.split(' ')[1].toString().toLowerCase();
            let filterText = this.state.filterText.toString().toLowerCase();
            if(roll.includes(filterText) || firstName.includes(filterText) || lastName.includes(filterText) || (firstName+" "+lastName).includes(filterText) ){
                updatedTable.push(( <tr key = {i++}><td>{i}</td><td>{student.rollNo}</td><td>{student.name.split(' ')[0]}</td><td>{student.name.split(' ')[1]}</td><td>{student.hostel}</td><td>{student.eating?<FaCheck/>:<FaClose/>}</td></tr>));
            }
        }.bind(this));
        if(updatedTable.length === 0){
                updatedTable.push(<tr key = "1"><td colSpan = "6">No Data Found.</td></tr>)
        }

        return(
            <div>
            <form className = "col-xs-12 col-lg-4 col-lg-offset-4">
              <FormGroup>
                  <FormControl type="text" id="filter" onChange = {this.handleUpdateInput.bind(this)} placeholder = "Enter Roll No. | Name"/>
              </FormGroup>
            </form>  
            {this.state.isLoading && <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>RollNo.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Hostel</th>
                        <th>Eating?</th>
                    </tr>
                </thead>
                <tbody>
                    {updatedTable}
                </tbody>
            </Table>}
          </div>
        )
    }
}