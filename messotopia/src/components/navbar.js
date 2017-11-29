import React, { Component } from 'react';
import {Navbar, Nav, NavItem,Modal,Button,FormGroup,FormControl,HelpBlock} from 'react-bootstrap';
import './loginModal.css';
import axios from 'axios';
import UserProfile from './userProfile';
import { Link } from 'react-router-dom';

export default class CustomNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal:false,
            islogged:false,
            error:null
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
            if(res.data.response.success===1){
                UserProfile.setUser({name:res.data.response.name,id:res.data.response.id,level:"0"});
                this.setState({ showModal: false,islogged:true});
                this.props.history.push('/profile');
            }else{
                this.setState({error:'Username/Password is Incorrect'});
            }
            
        }.bind(this)).catch(function(error){
            console.log(error);
        });
    }
    render(){
        return(
            <Navbar inverse collapseOnSelect style={{borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Messotopia</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventkey={1} className="linkItem"><Link to="/about" >About</Link></NavItem>
                        {this.props.user.getUser().id!=null && <NavItem eventKey={3} className="linkItem" ><Link to="/menu">Menu</Link></NavItem> }
                    </Nav>
                    <Nav pullRight>
                    {this.props.user.getUser().id!=null && <NavItem eventKey={3} className="linkItem" ><Link to="/profile">{this.props.user.getUser().name}</Link></NavItem> }
                    { this.props.user.getUser().id!=null && <NavItem eventKey={2} onClick={this.logout.bind(this)} className="linkItem"><Link to = '/'>Logout</Link></NavItem>
                        }
                        {this.props.user.getUser().id===null && <NavItem eventKey={2} href='#' onClick={this.on.bind(this)} className="linkItem">Login</NavItem>}   
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
                                    <HelpBlock>{this.state.error?this.state.error:""}</HelpBlock>
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
