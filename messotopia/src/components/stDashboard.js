import React, { Component } from 'react';
import {Table, Button} from 'react-bootstrap';
import axios from 'axios';
import UserProfile from './userProfile';

export default class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:{},
            btn:{},
            isEating:true
        }
        const url = 'http://localhost:5000';
        if(UserProfile.getUser().id !== undefined && UserProfile.getUser().id!==null && UserProfile.getUser().level!==0){
            axios.get(url+'/api/stdetail/'+UserProfile.getUser().id).then(function(result){
                console.log(result.data.response[0]);
                this.setState({
                    data:result.data.response[0],
                })
            }.bind(this)).catch(function(error){
                console.log(error);
            })
            var meal = Date().split(' ')[4].split(':')[0]<12?'Lunch':'Dinner';
            var date = (Date().split(' ')[1]+":"+Date().split(' ')[2]+":"+Date().split(' ')[3]);
            console.log(date);
            if((Date().split(' ')[4].split(':')[0]>10 && Date().split(' ')[4].split(':')[0]<12) || (Date().split(' ')[4].split(':')[0]>16 && Date().split(' ')[4].split(':')[0]<18)){
                axios.get(url+'/api/latestmeal/'+UserProfile.getUser().id+'/'+(date)+'/'+meal).then(function(result){
                    if(result.data.response[0].success===1){
                        this.setState({
                            isEating:false,
                            btn:`Eat ${meal}`
                        })
                    }else{
                        this.setState({
                            isEating:true,
                            btn:`Cancel ${meal}`
                        })
                    }
                }.bind(this))
                .catch(function(error){
                    console.log(error);
                })
            } 
        }else{
            this.props.history.push('/');
        }
    }
    
    eat(){
        if(this.state.isEating){
            
            this.setState({
                isEating:false,
            })
        }else{


            this.setState({
                isEating:true,
            })
        }
    }
    
    render(){
        return(
            <div>
                <Table striped bordered condensed hover responsive>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Hostel</th>
                    <th>Leaves</th>
                    <th colSpan="2">Dates</th>
                    <th>Total Meals</th>
                    <th>Contact no.</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.data.name}</td>
                        <td>{this.state.data.rollNo}</td>
                        <td>{this.state.data.hostelName}</td>
                        <td>{this.state.data.leaveCount}</td>
                        <td colSpan="2">{this.state.data.dates}</td>
                        <td>{this.state.data.totalMeals}</td>
                        <td>{this.state.data.phone}</td>
                        <td>{this.state.data.email}</td>
                    </tr>
                </tbody>
                </Table>
                <hr/>
                <div class="row">
                    <div class = "col-xs-12 col-md-12">
                        <h3>Update Next Meal Status</h3>

                        {((Date().split(' ')[4].split(':')[0]>10 && Date().split(' ')[4].split(':')[0]<12) || (Date().split(' ')[4].split(':')[0]>16 && Date().split(' ')[4].split(':')[0]<18))?
                        <Button className="btn btn-primary" onClick={this.eat.bind(this)}>{this.state.btn}</Button>:'Portal is closed.'}
                        
                    </div>
                </div>
            </div>
        )
    }
}