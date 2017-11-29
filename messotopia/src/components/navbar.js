import React, { Component } from 'react';
import react from 'react-dom';
import {Navbar, Nav, NavItem,Modal,Button,FormGroup,FormControl} from 'react-bootstrap';
import './loginModal.css';
import axios from 'axios';
import UserProfile from './userProfile';

export class CustomNavBar extends Component{

    constructor(){
        super();
        this.state = {
            showModal:false,
            islogged:false
        }
    }

    on(){
        this.setState({ showModal: true });
    }
    close(){
        this.setState({ showModal: false });
    }

    logout(){
        UserProfile.setUser({name:"",id:null,level:null});
        this.setState({islogged:false})
    }

    submitForm(e){
        e.preventDefault();
        const url = 'http://localhost:5000';
        axios.post(url+'/api/login',{
            level:"0",
            email:window.document.getElementById('email').value,
            password:window.document.getElementById('password').value,
        }).then(function(res){
            console.log(res.data.response);
            UserProfile.setUser({name:res.data.response.name,id:res.data.response.id,level:"0"});
            this.setState({ showModal: false,islogged:true});
        }.bind(this)).catch(function(error){
            console.log(error);
        });
    }
    render(){
        return(
            <Navbar inverse collapseOnSelect style={{borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Messotopia</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventkey={1} href="#">About</NavItem>
                        {/* <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown> */}
                    </Nav>
                    <Nav pullRight>
                    {this.props.user.getUser().id!=null && <NavItem eventKey={1} href={'/profile'}>{this.props.user.getUser().name}</NavItem> }
                    { this.props.user.getUser().id!=null && <NavItem eventKey={2} onClick={this.logout.bind(this)} href='#'>Logout</NavItem>
                        }
                        {this.props.user.getUser().id===null && <NavItem eventKey={2} href='#' onClick={this.on.bind(this)}>Login</NavItem>}   
                        <Modal show={this.state.showModal} onHide={this.close.bind(this)} className="loginmodal-container">
                            <Modal.Header closeButton>
                                <Modal.Title>Login to your account</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={this.submitForm.bind(this)}>
                                    <FormGroup>
                                        <FormControl type="text" placeholder="Email" name="email" id="email"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl type="password" placeholder="Password" name="password" id="password"/>
                                    </FormGroup>
                                <Button type="submit" name="login" className="btn btn-block loginmodal-submit">Login</Button>
                                </form>
                                <div className="login-help">
                                    <a href="#">Forgot Password</a>
                                </div>
                            </Modal.Body>
                        </Modal>              
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}