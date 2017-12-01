import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import UserProfile from './userProfile';
// import  from 'react-router-dom';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state ={
            data:[],
        }
        const url = 'http://localhost:5000';
        const prop = 'http://localhost:1234';
        if(UserProfile.getUser().id !== undefined && UserProfile.getUser().id!==null && UserProfile.getUser().level!==0){
            axios.get(url + '/api/stdetail/'+UserProfile.getUser().id).then(function(result){
                const hostel = result.data.response[0].hostelName;
                axios.get(url+'/api/messmenu/'+hostel).then(function(res){       
                    res.data.response.map(function(day,i){
                        var menu=[];
                        menu.push(<tr key={day.id}>
                            <td>{day.day}</td>
                            <td>{day.breakfast}</td>
                            <td>{day.lunch}</td>
                            <td>{day.dinner}</td>
                        </tr>);
                        this.setState({
                            data:menu
                        })
                    }.bind(this));
                }.bind(this));
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
        }else{
            this.props.history.push('/');
        }
    }
    
    // Rend here.
    render(){
        return(
            <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Day</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data}
            </tbody>
          </Table>
        )
    }
}
