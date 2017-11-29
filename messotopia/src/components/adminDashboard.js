import React, { Component } from 'react';
import {Table, Button} from 'react-bootstrap';
import axios from 'axios';
import UserProfile from './userProfile';

export default class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:{},
        }
        const url = 'http://localhost:5000';
        if(UserProfile.getUser().id !== undefined && UserProfile.getUser().id!==null && UserProfile.getUser().level!==1){

     
        }else{
            this.props.history.push('/');
        }
    }
    
    render(){
        return(
            <div>
                
            </div>
        )
    }
}