import React, {Component} from "react";
//import fire from "./fire"
import 'bootstrap/dist/css/bootstrap.min.css'
import{Button} from 'react-bootstrap'
//import ReactPlayer from 'react-player'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import logo from './logo.svg';
import { useHistory } from 'react-router';
import Log from 'Log.js';


class Navbarrr extends Component {
    
  
    render() {
        return (
            <div>
            <Navbar bg="danger" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      
            <Navbar.Brand >
              <img src={logo} width="40px" height="40px" />{'      '}
              Logo 
            </Navbar.Brand>
    
            <Navbar.Toggle/>
            <Navbar.Collapse>
            
            <Nav.Link href="#products">Home</Nav.Link>
            <Nav.Link href="#products">Profile</Nav.Link>
            <Nav.Link href="#products">Contact Us</Nav.Link>
            </Navbar.Collapse>
    
            
    
            <div>
            let history=useHistory();
            <button onClick={()=>{history.push("/profile")}}>Logout</button>{' '}
    
            </div>
            
    
          
          </Navbar>
          <div>
          <Log/>
          </div>
            </div>
           
        );
    }
}



export default Navbarrr;