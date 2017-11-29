import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
export default class About extends Component{
    render(){
        return(
            <div>
                <Jumbotron>
                    <h2>About Messotopia</h2>
                    <p style={{textAlign:'center'}}>A management software for Mess Contractors where the students could inform the Contractor about their Availablity status for future meals. It helps the Contractor to save wastage on extra food and also bills the students for the particular meals that they consumed during the course of a month. Only those students who are sure about their unavailablity for the next meal can change their status for next meal to Unavailable(Atleast 4 hrs prior to the meal). By default the status would be Available.</p>
                </Jumbotron>
                <Jumbotron>
                    <h2>About Us</h2>
                    <ul style={{textAlign:'left',listStyle:'none'}}>
                        <li>Bharat Chhabra - 101412012</li>
                        <li>Chirag Shahi - 101412013</li>
                        <li>Dikshit Kalra - 101412014</li>
                        <li>Gursimran Singh Sachhar - 101412016</li>
                    </ul>
                </Jumbotron>
            </div>
        )
    }
}