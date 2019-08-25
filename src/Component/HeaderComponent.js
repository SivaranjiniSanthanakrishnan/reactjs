import React,{Component} from 'react'
import {Navbar,NavbarBrand,Jumbotron, Nav,  NavItem, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Label, Col} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class HeaderComponent extends Component{
  constructor(props){
    super(props);

    this.state={
      isOpen: false
    }

    this.handlemodaltoggler=this.handlemodaltoggler.bind(this)
    this.handlesubmit=this.handlesubmit.bind(this)
  }

  handlemodaltoggler(evt){
    this.setState({
      isOpen:!this.state.isOpen
    })
  }

  handlesubmit(){
    this.handlemodaltoggler();
    alert("UserName is "+this.username.value+" Password is "+ this.password.value+" Remember is "+this.remember.value);
  }

  render(){
      return(
          <>
          <Navbar dark color="secondary" expand="md">
          <div className="container">
            <div className="row ">
              <NavbarBrand href="/"><img src='./assests/images/logo.png' height="30px" width="41px"/></NavbarBrand>
            
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg">Home</span></NavLink>
              </NavItem>
          
              <NavItem>
                <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"> Menu </span></NavLink>
              </NavItem>
          
              <NavItem>
                <NavLink className="nav-link" to="/feedback"><span className="fa fa-info fa-lg">About Us</span></NavLink>
              </NavItem>
          
              <NavItem>
                <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"> Contact Us</span></NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Button  onClick={this.handlemodaltoggler}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                </NavItem>
            </Nav>
          </div>
          </div>     
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                  <div className="col-12 col-sm-6">
                    <h1>Restuarant of Colors</h1>
                    <h2> Welcome </h2>
                    </div>
                </div>
            </div>
        </Jumbotron>
        <Modal isOpen={this.state.isOpen} toggle={this.handlemodaltoggler}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <div className="container">
              <Form onSubmit={this.handlesubmit}>

                <FormGroup row>
                  <Label md={4} htmlFor="Username">UserName</Label>
                  <Col md={5}>
                  <Input type="text" innerRef={(input)=> this.username=input } name="username" id="username" ></Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={4} htmlFor="Password">Password</Label>
                  <Col md={5}>
                  <Input type="password" innerRef={(input)=> this.password=input } name="password" id="password" ></Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={4} htmlFor="Remember Me">Remember Pass</Label>
                  <Col md={{size:5,offet:3}}>
                  <Input type="checkbox" innerRef={(input)=> this.remember=input } name="remember" id="remember" ></Input>
                  </Col>
                </FormGroup>
                <Button type="submit" color="primary"> Login </Button>
              </Form>
              </div>
          </ModalBody>
        </Modal>
        </>
      );
    }
} 

export default HeaderComponent;